package com.example.server.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "courses")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    // length = 500 permite descripciones más largas que el estándar de 255
    // caracteres
    @Column(length = 500)
    private String description;

    private Integer credits;

    private Integer capacity; // Cupo máximo de alumnos permitidos
}
