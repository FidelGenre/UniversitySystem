package com.example.server.controller;

import com.example.server.entity.Course;
import com.example.server.entity.Enrollment;
import com.example.server.entity.Student;
import com.example.server.repository.CourseRepository;
import com.example.server.repository.EnrollmentRepository;
import com.example.server.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/student")
@PreAuthorize("hasRole('STUDENT')") // Solo Estudiantes
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    @Autowired
    EnrollmentRepository enrollmentRepository;
    @Autowired
    CourseRepository courseRepository;
    @Autowired
    StudentRepository studentRepository; // Necesario para buscar el perfil del alumno

    // Ver mis inscripciones y notas
    @GetMapping("/my-grades")
    public List<Enrollment> getMyGrades() {
        // MOCK: Usamos el ID de Usuario (User ID) simulando el login
        Long mockUserId = 1L;

        // 1. Buscamos el Estudiante asociado a este Usuario
        Student student = studentRepository.findByUserId(mockUserId)
                .orElseThrow(
                        () -> new RuntimeException("Perfil de estudiante no encontrado para el usuario " + mockUserId));

        // 2. Buscamos las inscripciones usando el ID del Estudiante (no el del User)
        return enrollmentRepository.findByStudentId(student.getId());
    }

    // Inscribirse a una materia
    @PostMapping("/enroll/{courseId}")
    public Enrollment enrollCourse(@PathVariable Long courseId) {
        // MOCK User ID
        Long mockUserId = 1L;

        // 1. Corregido: Buscamos el objeto STUDENT, no el USER
        Student student = studentRepository.findByUserId(mockUserId)
                .orElseThrow(() -> new RuntimeException(
                        "Perfil de estudiante no encontrado. ¿Ya creaste el perfil de alumno?"));

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        Enrollment enrollment = new Enrollment();
        enrollment.setStudent(student); // Ahora sí: pasamos un objeto Student
        enrollment.setCourse(course);

        return enrollmentRepository.save(enrollment);
    }

    // Ver materias disponibles para inscribirse
    @GetMapping("/available-courses")
    public List<Course> getAvailableCourses() {
        return courseRepository.findAll();
    }
}