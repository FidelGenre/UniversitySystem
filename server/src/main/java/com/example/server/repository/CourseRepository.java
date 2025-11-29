package com.example.server.repository;

import com.example.server.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
    // No necesitamos métodos personalizados por ahora, JpaRepository es suficiente
}
