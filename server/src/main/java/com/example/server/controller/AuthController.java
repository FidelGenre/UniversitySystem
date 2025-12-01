package com.example.server.controller;

import com.example.server.entity.User;
import com.example.server.repository.UserRepository;
import com.example.server.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        if (userRepository.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body("Error: Username is already taken!");
        }
        user.setPassword(encoder.encode(user.getPassword()));
        if (user.getRole() == null)
            user.setRole(User.Role.STUDENT);

        userRepository.save(user);
        return ResponseEntity.ok(Map.of("message", "User registered successfully!"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginRequest) {
        String username = loginRequest.get("username");
        String password = loginRequest.get("password");

        // 1. Buscar usuario en BD
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // 2. Verificar contraseña
        if (!encoder.matches(password, user.getPassword())) {
            return ResponseEntity.badRequest().body("Contraseña incorrecta");
        }

        // 3. Generar Token Real con el Rol correcto
        String token = jwtUtil.generateToken(user.getUsername(), user.getRole().name());

        // 4. Devolver Token y Rol real para que el Frontend redirija bien
        return ResponseEntity.ok(Map.of(
                "token", token,
                "role", user.getRole().name(),
                "username", user.getUsername()));
    }
}