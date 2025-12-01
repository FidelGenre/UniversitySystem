import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  
  // Estado para el menú hamburguesa
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => setIsOpen(!isOpen);

  // Función para cerrar el menú al hacer click en un enlace
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          UniSystem
        </Link>

        {/* Botón Hamburguesa (Visible solo en móvil) */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={isOpen ? styles.barOpen : styles.bar}></span>
          <span className={isOpen ? styles.barOpen : styles.bar}></span>
          <span className={isOpen ? styles.barOpen : styles.bar}></span>
        </button>

        {/* Links (Se muestran/ocultan con la clase 'active') */}
        <ul className={`${styles.links} ${isOpen ? styles.active : ''}`}>
          {user ? (
            // --- USUARIO LOGUEADO ---
            <>
              <li>
                <Link to={user.role === 'ADMIN' ? '/admin' : '/student'} onClick={closeMenu}>
                  Dashboard
                </Link>
              </li>
              <li>
                <button onClick={() => { logoutUser(); closeMenu(); }} className={styles.logoutBtn}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            // --- USUARIO PÚBLICO ---
            !isAuthPage && (
              <>
                <li><a href="#about" className={styles.navLink} onClick={closeMenu}>About</a></li>
                <li><a href="#careers" className={styles.navLink} onClick={closeMenu}>Programs</a></li>
                <li><a href="#contact" className={styles.navLink} onClick={closeMenu}>Contact</a></li>
                <li>
                  <Link to="/login" className={styles.loginLink} onClick={closeMenu}>
                    Login
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