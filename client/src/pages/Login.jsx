import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import * as authService from '../services/authService';
import styles from './Login.module.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const { loginUser } = useAuth(); // Función del Contexto
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // 1. Llamada a API (Spring Boot)
      const data = await authService.login(credentials);
      
      // 2. Actualizar Contexto Global y redirigir
      loginUser({ username: credentials.username, role: data.role });
      
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        <h2>Academic System Login</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.group}>
            <label>Username</label>
            <input 
              name="username" 
              type="text" 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className={styles.group}>
            <label>Password</label>
            <input 
              name="password" 
              type="password" 
              onChange={handleChange} 
              required 
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.btn}>Sign In</button>
        </form>
        <p className={styles.footer}>
          New student? <Link to="/register">Create account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;