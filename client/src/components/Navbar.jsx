import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          UniSystem
        </Link>

        <ul className={styles.links}>
          {user ? (
            // --- USUARIO LOGUEADO ---
            // Solo mostramos "Dashboard" y "Logout" para mantenerlo limpio
            <>
              <li>
                <Link to={user.role === 'ADMIN' ? '/admin' : '/student'}>
                  Dashboard
                </Link>
              </li>
              <li>
                <button onClick={logoutUser} className={styles.logoutBtn}>Logout</button>
              </li>
            </>
          ) : (
            // --- USUARIO PÚBLICO ---
            !isAuthPage && (
              <>
                <li><a href="#careers" className={styles.navLink}>Programs</a></li>
                <li><a href="#contact" className={styles.navLink}>Contact</a></li>
                <li>
                  <Link to="/login" className={styles.loginLink}>
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