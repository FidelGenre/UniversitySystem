import { useState, useEffect } from 'react';
import * as adminService from '../../services/adminService';
import CourseCard from '../../components/CourseCard'; // Reutilizamos CourseCard
import styles from './ManageCourses.module.css';

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', credits: 3 });

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const res = await adminService.getAllCourses();
      setCourses(res.data);
    } catch (err) { console.error(err); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await adminService.createCourse(form);
      setForm({ name: '', description: '', credits: 3 });
      loadCourses();
      alert('Course created successfully');
    } catch (err) { alert('Error creating course'); }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Manage Courses</h2>
      </div>

      <div className={styles.content}>
        {/* Formulario a la izquierda */}
        <div className={styles.formSection}>
          <h3>Add New Course</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input 
              placeholder="Course Name" 
              value={form.name}
              onChange={e => setForm({...form, name: e.target.value})}
              required
            />
            <textarea 
              placeholder="Description" 
              value={form.description}
              onChange={e => setForm({...form, description: e.target.value})}
              required
            />
            <input 
              type="number" 
              placeholder="Credits" 
              value={form.credits}
              onChange={e => setForm({...form, credits: e.target.value})}
              required
            />
            <button type="submit">Create Course</button>
          </form>
        </div>

        {/* Lista a la derecha */}
        <div className={styles.listSection}>
          <h3>Existing Courses</h3>
          <div className={styles.grid}>
            {courses.map(course => (
              <CourseCard key={course.id} course={course} isAdminView={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCourses;