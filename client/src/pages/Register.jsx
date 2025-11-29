import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as authService from '../services/authService';
import styles from './Register.module.css';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.register(form);
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      alert('Error registering');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Student Registration</h2>
        <input 
          type="text" placeholder="Username" required 
          onChange={e => setForm({...form, username: e.target.value})}
          className={styles.input}
        />
        <input 
          type="password" placeholder="Password" required 
          onChange={e => setForm({...form, password: e.target.value})}
          className={styles.input}
        />
        <button type="submit" className={styles.btn}>Register</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;