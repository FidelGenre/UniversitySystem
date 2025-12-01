package com.example.server.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String studentId; // Legajo o Matrícula única del estudiante

    private String phone;
    private String profilePictureUrl;

    private String firstName;
    private String lastName;
    private String email;

    // Relación 1 a 1 con el Usuario de Login (para autenticación)
    // CascadeType.ALL permite que al borrar el estudiante, se borre el usuario
    // asociado si es necesario
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
}
