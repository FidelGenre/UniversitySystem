package com.example.server.controller;

import com.example.server.entity.User;
import com.example.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") // Puerto por defecto de Vite
public class AuthController {

    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder encoder;
    // @Autowired AuthenticationManager authenticationManager; // Usar para login
    // real
    // @Autowired JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        if (userRepository.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body("Error: Username is already taken!");
        }
        user.setPassword(encoder.encode(user.getPassword()));
        // Asignar rol por defecto si es necesario
        if (user.getRole() == null)
            user.setRole(User.Role.STUDENT);

        userRepository.save(user);
        return ResponseEntity.ok(Map.of("message", "User registered successfully!"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginRequest) {
        // Aquí iría la lógica de autenticación real con AuthenticationManager
        // y la generación del token JWT.
        // Por simplicidad en este ejemplo, retornamos un mock.
        return ResponseEntity.ok(Map.of("token", "fake-jwt-token", "role", "STUDENT"));
    }
}