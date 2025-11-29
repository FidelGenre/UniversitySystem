import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const location = useLocation();

  // Si estamos en login/register, a veces es mejor ocultar la navbar, 
  // pero aquí la dejaremos visible para facilitar la navegación.
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo siempre visible */}
        <Link to="/" className={styles.logo}>
          UniSystem
        </Link>

        {/* Menú Dinámico */}
        <ul className={styles.links}>
          {user ? (
            // --- USUARIO LOGUEADO ---
            <>
              {user.role === 'ADMIN' && (
                <>
                  <li><Link to="/admin">Dashboard</Link></li>
                  <li><Link to="/admin/courses">Materias</Link></li>
                  <li><Link to="/admin/students">Alumnos</Link></li>
                </>
              )}
              {user.role === 'STUDENT' && (
                <>
                  <li><Link to="/student">Mis Notas</Link></li>
                  <li><Link to="/student/enroll">Inscripción</Link></li>
                </>
              )}
              <li>
                <button onClick={logoutUser} className={styles.logoutBtn}>Salir</button>
              </li>
            </>
          ) : (
            // --- USUARIO PÚBLICO (No logueado) ---
            !isAuthPage && (
              <>
                <li><a href="#carreras" className={styles.navLink}>Carreras</a></li>
                <li><a href="#contacto" className={styles.navLink}>Contacto</a></li>
                <li>
                  <Link to="/login" className={styles.loginLink}>
                    Ingresar
                  </Link>
                </li>
              </>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;