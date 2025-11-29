package com.example.server.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "enrollments")
public class Enrollment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Relación Muchos a Uno: Un estudiante puede tener muchas inscripciones
    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    // Relación Muchos a Uno: Un curso puede tener muchas inscripciones
    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    private Double grade; // Nota final (puede ser null si aun no ha terminado el curso)

    private LocalDate enrollmentDate = LocalDate.now(); // Fecha de inscripción automática
}