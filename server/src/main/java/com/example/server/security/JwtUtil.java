package com.example.server.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    // IMPORTANTE: En producción, mueve esta clave a application.properties y usa
    // @Value
    // Debe ser una cadena larga y compleja para seguridad HS256
    private static final String SECRET_KEY = "mi_clave_secreta_super_segura_para_el_sistema_academico_xyz_university_key";

    // Tiempo de expiración del token (1 día = 86400000 ms)
    private static final long EXPIRATION_TIME = 86400000;

    private Key getSigningKey() {
        return Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
    }

    // Generar Token
    public String generateToken(String username, String role) {
        return Jwts.builder()
                .setSubject(username)
                .claim("role", role) // Guardamos el rol dentro del token
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    // Extraer Username del Token
    public String getUsernameFromToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    // Validar Token
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(getSigningKey()).build().parseClaimsJws(token);
            return true;
        } catch (JwtException e) {
            System.out.println("Invalid JWT Token: " + e.getMessage());
            return false;
        }
    }
}
