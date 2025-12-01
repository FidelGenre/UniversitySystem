package com.example.server.controller;

import com.example.server.entity.Course;
import com.example.server.entity.Enrollment;
import com.example.server.entity.Teacher;
import com.example.server.entity.User;
import com.example.server.repository.CourseRepository;
import com.example.server.repository.EnrollmentRepository;
import com.example.server.repository.TeacherRepository;
import com.example.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')") // Solo Admin puede entrar aquí
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    @Autowired
    CourseRepository courseRepository;

    @Autowired
    EnrollmentRepository enrollmentRepository;

    // Inyectamos los repositorios nuevos para la gestión de profesores
    @Autowired
    TeacherRepository teacherRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    // --- GESTIÓN DE MATERIAS (Original) ---

    // Crear Materia
    @PostMapping("/courses")
    public Course createCourse(@RequestBody Course course) {
        return courseRepository.save(course);
    }

    // Listar todas las Materias
    @GetMapping("/courses")
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    // --- GESTIÓN DE NOTAS (Original) ---

    // Cargar Nota a un alumno (Actualizar Enrollment)
    @PutMapping("/grades/{enrollmentId}")
    public Enrollment updateGrade(@PathVariable Long enrollmentId, @RequestBody Double grade) {
        Enrollment enrollment = enrollmentRepository.findById(enrollmentId)
                .orElseThrow(() -> new RuntimeException("Enrollment not found"));
        enrollment.setGrade(grade);
        return enrollmentRepository.save(enrollment);
    }

    // --- GESTIÓN DE PROFESORES (Nuevo) ---

    // 1. Crear un Profesor (Genera Usuario + Perfil Teacher)
    @PostMapping("/teachers")
    public Teacher createTeacher(@RequestBody Teacher teacherData) {
        // Primero creamos el usuario para que pueda loguearse
        User user = new User();
        user.setUsername(teacherData.getEmail()); // El email será su usuario
        user.setPassword(encoder.encode("123456")); // Contraseña por defecto
        user.setRole(User.Role.ADMIN); // Por ahora usamos ADMIN o podrías crear rol TEACHER

        userRepository.save(user);

        // Vinculamos el usuario al perfil del profesor
        teacherData.setUser(user);
        return teacherRepository.save(teacherData);
    }

    // 2. Asignar un Profesor a una Materia existente
    @PutMapping("/courses/{courseId}/assign-teacher/{teacherId}")
    public Course assignTeacher(@PathVariable Long courseId, @PathVariable Long teacherId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        Teacher teacher = teacherRepository.findById(teacherId)
                .orElseThrow(() -> new RuntimeException("Teacher not found"));

        course.setTeacher(teacher); // Actualizamos la relación
        return courseRepository.save(course);
    }
}