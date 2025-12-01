package com.example.server.repository;

import com.example.server.entity.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface NewsRepository extends JpaRepository<News, Long> {
    // Buscar noticias visibles ordenadas por fecha (la más nueva primero)
    List<News> findByVisibleTrueOrderByPublicationDateDesc();
}