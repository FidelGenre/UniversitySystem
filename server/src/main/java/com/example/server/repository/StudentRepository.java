package com.example.server.repository;

import com.example.server.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {
    // Buscar estudiante por el ID de su usuario de sistema asociado
    Optional<Student> findByUserId(Long userId);
}
