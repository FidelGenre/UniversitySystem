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
            // --- LOGGED USER ---
            <>
              {user.role === 'ADMIN' && (
                <>
                  <li><Link to="/admin">Dashboard</Link></li>
                  <li><Link to="/admin/courses">Courses</Link></li>
                  <li><Link to="/admin/students">Students</Link></li>
                </>
              )}
              {user.role === 'STUDENT' && (
                <>
                  <li><Link to="/student">My Grades</Link></li>
                  <li><Link to="/student/enroll">Enrollment</Link></li>
                </>
              )}
              <li>
                <button onClick={logoutUser} className={styles.logoutBtn}>Logout</button>
              </li>
            </>
          ) : (
            // --- PUBLIC USER ---
            !isAuthPage && (
              <>
                <li><a href="#careers" className={styles.navLink}>Careers</a></li>
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