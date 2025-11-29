import { useState, useEffect } from 'react';
import * as adminService from '../../services/adminService';
import styles from './ManageStudents.module.css';

const ManageStudents = () => {
  const [students, setStudents] = useState([]);

  // Nota: Asegúrate de crear el endpoint /admin/students en Spring Boot
  // que devuelva Enrollments o Usuarios con sus notas.
  
  return (
    <div className={styles.container}>
      <h2>Student Management</h2>
      <div className={styles.tableContainer}>
        <p>Implementación pendiente de endpoint Backend...</p>
        {/* Aquí iría una tabla similar a StudentHome mapeando estudiantes */}
      </div>
    </div>
  );
};

export default ManageStudents;
