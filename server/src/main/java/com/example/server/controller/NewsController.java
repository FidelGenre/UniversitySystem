package com.example.server.controller;

import com.example.server.entity.News;
import com.example.server.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/news")
@CrossOrigin(origins = "http://localhost:5173")
public class NewsController {

    @Autowired
    NewsRepository newsRepository;

    // PÚBLICO: Todos pueden ver las noticias (Estudiantes y Visitas)
    @GetMapping
    public List<News> getAllNews() {
        return newsRepository.findByVisibleTrueOrderByPublicationDateDesc();
    }

    // SOLO ADMIN: Crear noticias
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public News createNews(@RequestBody News news) {
        return newsRepository.save(news);
    }
}