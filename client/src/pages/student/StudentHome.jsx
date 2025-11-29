import { useState, useEffect } from 'react';
import * as studentService from '../../services/studentService';
import styles from './StudentHome.module.css';

const StudentHome = () => {
  const [myGrades, setMyGrades] = useState([]);

  useEffect(() => {
    fetchMyGrades();
  }, []);

  const fetchMyGrades = async () => {
    try {
      const res = await studentService.getMyGrades();
      setMyGrades(res.data);
    } catch (error) { console.error(error); }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>My Grades</h1>
      </header>

      <section className={styles.card}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {myGrades.map(enrollment => (
              <tr key={enrollment.id}>
                <td>{enrollment.course.name}</td>
                <td>
                  {enrollment.grade ? (
                    <span className={enrollment.grade >= 6 ? styles.pass : styles.fail}>
                      {enrollment.grade}
                    </span>
                  ) : 'Pending'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default StudentHome;