import styles from './CourseCard.module.css';

const CourseCard = ({ course, actionLabel, onAction, isAdminView }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{course.name}</h3>
        <span className={styles.credits}>{course.credits} cr</span>
      </div>
      <p className={styles.desc}>{course.description}</p>
      
      {/* Si pasamos una acción (ej: Enroll), mostramos el botón */}
      {onAction && (
        <button onClick={() => onAction(course.id)} className={styles.actionBtn}>
          {actionLabel}
        </button>
      )}

      {/* Si es vista de admin, podríamos mostrar icono de editar/borrar */}
      {isAdminView && <span className={styles.badge}>Active</span>}
    </div>
  );
};

export default CourseCard;