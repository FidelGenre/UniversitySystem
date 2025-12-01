import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import ManageCourses from './ManageCourses';
import ManageStudents from './ManageStudents';
// Si aún no tienes componentes para Teachers/News, usaremos placeholders
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
  const location = useLocation();
  const [stats] = useState({
    students: 120,
    teachers: 15,
    courses: 8,
    activeNews: 3
  });

  // Función auxiliar para determinar si el link está activo
  const isActive = (path) => location.pathname === path ? styles.activeLink : '';

  return (
    <div className={styles.dashboardContainer}>
      
      {/* --- SIDEBAR --- */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h3>Admin Panel</h3>
        </div>
        <nav className={styles.sidebarNav}>
          <Link to="/admin" className={`${styles.navItem} ${location.pathname === '/admin' ? styles.activeLink : ''}`}>
            📊 Resumen
          </Link>
          <Link to="/admin/courses" className={`${styles.navItem} ${isActive('/admin/courses')}`}>
            📚 Materias
          </Link>
          <Link to="/admin/students" className={`${styles.navItem} ${isActive('/admin/students')}`}>
            🎓 Alumnos
          </Link>
          {/* Enlaces futuros para lo que agregamos al backend */}
          <Link to="/admin/teachers" className={`${styles.navItem} ${isActive('/admin/teachers')}`}>
            👨‍🏫 Profesores
          </Link>
          <Link to="/admin/news" className={`${styles.navItem} ${isActive('/admin/news')}`}>
            📰 Noticias
          </Link>
        </nav>
      </aside>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className={styles.mainContent}>
        
        {/* Header Superior */}
        <header className={styles.topHeader}>
          <h2>
            {location.pathname === '/admin' ? 'Dashboard Overview' : 
             location.pathname.includes('courses') ? 'Gestión de Materias' :
             location.pathname.includes('students') ? 'Gestión de Alumnos' : 'Sección Admin'}
          </h2>
          <div className={styles.userProfile}>
            <span>Administrador</span>
            <div className={styles.avatar}>A</div>
          </div>
        </header>

        {/* Área Dinámica */}
        <div className={styles.contentArea}>
          <Routes>
            {/* VISTA PRINCIPAL (RESUMEN) */}
            <Route path="/" element={
              <div className={styles.widgetsGrid}>
                <div className={`${styles.card} ${styles.blueCard}`}>
                  <h3>Alumnos</h3>
                  <p className={styles.number}>{stats.students}</p>
                  <span>Inscritos activos</span>
                </div>
                <div className={`${styles.card} ${styles.greenCard}`}>
                  <h3>Profesores</h3>
                  <p className={styles.number}>{stats.teachers}</p>
                  <span>Staff docente</span>
                </div>
                <div className={`${styles.card} ${styles.orangeCard}`}>
                  <h3>Materias</h3>
                  <p className={styles.number}>{stats.courses}</p>
                  <span>Carreras y cursos</span>
                </div>
                <div className={`${styles.card} ${styles.purpleCard}`}>
                  <h3>Noticias</h3>
                  <p className={styles.number}>{stats.activeNews}</p>
                  <span>Publicadas en cartelera</span>
                </div>

                {/* Acciones Rápidas */}
                <div className={styles.quickActions}>
                  <h3>Acciones Rápidas</h3>
                  <div className={styles.actionButtons}>
                    <button className={styles.actionBtn}>+ Nueva Materia</button>
                    <button className={styles.actionBtn}>+ Registrar Alumno</button>
                    <button className={styles.actionBtn}>+ Publicar Noticia</button>
                  </div>
                </div>
              </div>
            } />

            {/* SUB-RUTAS DE GESTIÓN */}
            {/* Estas cargan los componentes que ya tenías */}
            <Route path="courses" element={<ManageCourses />} />
            <Route path="students" element={<ManageStudents />} />
            
            {/* Placeholders para futuras implementaciones */}
            <Route path="teachers" element={<div className={styles.placeholder}>Gestión de Profesores (Próximamente)</div>} />
            <Route path="news" element={<div className={styles.placeholder}>Gestión de Noticias (Próximamente)</div>} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;