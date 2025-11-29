import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Admin Dashboard</h1>
      </header>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Quick Stats</h3>
          <p>Active Students: 120</p>
          <p>Total Courses: 15</p>
        </div>
        {/* Puedes agregar gráficos o accesos directos aquí */}
      </div>
    </div>
  );
};

export default AdminDashboard;