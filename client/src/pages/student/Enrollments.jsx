import { useState, useEffect } from 'react';
import * as studentService from '../../services/studentService';
import styles from './Enrollments.module.css';

const Enrollments = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const res = await studentService.getAvailableCourses();
      setCourses(res.data);
    } catch (err) { console.error(err); }
  };

  const handleEnroll = async (id) => {
    if (!window.confirm('Enroll in this course?')) return;
    try {
      await studentService.enrollCourse(id);
      alert('Success!');
      loadCourses(); // Recargar para filtrar si es necesario
    } catch (err) { alert('Failed to enroll'); }
  };

  return (
    <div className={styles.container}>
      <h2>Open for Enrollment</h2>
      <div className={styles.grid}>
        {courses.map(course => (
          <div key={course.id} className={styles.card}>
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <span className={styles.credits}>{course.credits} Credits</span>
            <button onClick={() => handleEnroll(course.id)} className={styles.btn}>
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enrollments;