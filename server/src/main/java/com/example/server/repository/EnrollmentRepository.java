package com.example.server.repository;

import com.example.server.entity.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
    // Obtener todas las materias inscritas de un alumno específico
    List<Enrollment> findByStudentId(Long studentId);

    // Verificar si un alumno ya está inscrito en un curso específico (para evitar
    // duplicados)
    Optional<Enrollment> findByStudentIdAndCourseId(Long studentId, Long courseId);
}