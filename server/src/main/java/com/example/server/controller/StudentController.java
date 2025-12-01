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

    // CAMBIO CLAVE: Agregamos el repositorio de Estudiantes
    @Autowired
    StudentRepository studentRepository;

    // Ver mis inscripciones y notas
    @GetMapping("/my-grades")
    public List<Enrollment> getMyGrades() {
        Long mockUserId = 1L;

        // CORRECCIÓN: Buscamos el objeto STUDENT usando el ID de usuario
        Student student = studentRepository.findByUserId(mockUserId)
                .orElseThrow(
                        () -> new RuntimeException("Perfil de estudiante no encontrado para el usuario " + mockUserId));

        return enrollmentRepository.findByStudentId(student.getId());
    }

    // Inscribirse a una materia
    @PostMapping("/enroll/{courseId}")
    public Enrollment enrollCourse(@PathVariable Long courseId) {
        Long mockUserId = 1L;

        // CORRECCIÓN: Ahora 'student' es de tipo Student, no User.
        // Esto soluciona el error "incompatible types".
        Student student = studentRepository.findByUserId(mockUserId)
                .orElseThrow(() -> new RuntimeException("Perfil de estudiante no encontrado."));

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        Enrollment enrollment = new Enrollment();
        enrollment.setStudent(student); // Ahora sí recibe un objeto Student
        enrollment.setCourse(course);

        return enrollmentRepository.save(enrollment);
    }

    // Ver materias disponibles para inscribirse
    @GetMapping("/available-courses")
    public List<Course> getAvailableCourses() {
        return courseRepository.findAll();
    }
}