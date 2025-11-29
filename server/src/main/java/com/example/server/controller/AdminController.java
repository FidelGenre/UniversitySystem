package com.example.server.controller;

import com.example.server.entity.Course;
import com.example.server.entity.Enrollment;
import com.example.server.repository.CourseRepository;
import com.example.server.repository.EnrollmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
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

    // Cargar Nota a un alumno (Actualizar Enrollment)
    @PutMapping("/grades/{enrollmentId}")
    public Enrollment updateGrade(@PathVariable Long enrollmentId, @RequestBody Double grade) {
        Enrollment enrollment = enrollmentRepository.findById(enrollmentId)
                .orElseThrow(() -> new RuntimeException("Enrollment not found"));
        enrollment.setGrade(grade);
        return enrollmentRepository.save(enrollment);
    }
}