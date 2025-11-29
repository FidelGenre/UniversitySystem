import { useParams, Link } from 'react-router-dom';
import styles from './CareerDetails.module.css';

const CareerDetails = () => {
  const { id } = useParams();

  // Datos Mock para simular la base de datos según la carrera seleccionada
  const careerData = {
    title: id === 'software' ? 'Técnico Superior en Desarrollo de Software' : 
           id === 'rrhh' ? 'Técnico Superior en Recursos Humanos' : 'Analista Programador',
    duration: '3 años',
    level: 'Superior',
    modality: 'Presencial / Híbrido',
    specialty: 'Informática',
    skills: [
      'Desarrollar y producir artefactos de software, tanto en su diseño, construcción y verificación.',
      'Participar en proyectos de diseño y desarrollo de software desempeñando diferentes roles.',
      'Satisfacer necesidades de instituciones, empresas y organismos relacionadas con el desarrollo.',
      'Adquirir actitudes positivas tendientes a la capacitación constante.'
    ]
  };

  return (
    <div className={styles.container}>
      {/* Header Institucional (Pequeño, simulando la web real) */}
      <div className={styles.topBar}>
        <Link to="/" className={styles.backLink}>← Volver al inicio</Link>
        <span>Instituto Superior</span>
      </div>

      {/* Título Principal */}
      <header className={styles.header}>
        <h1>{careerData.title}</h1>
      </header>

      {/* Banner Azul de Información (Como en la foto) */}
      <div className={styles.infoBanner}>
        <div className={styles.infoItem}>
          <strong>Duración:</strong> {careerData.duration}
        </div>
        <div className={styles.infoItem}>
          <strong>Nivel:</strong> {careerData.level}
        </div>
        <div className={styles.infoItem}>
          <strong>Modalidad:</strong> {careerData.modality}
        </div>
        <div className={styles.infoItem}>
          <strong>Especialidad:</strong> {careerData.specialty}
        </div>
      </div>

      {/* Contenido Principal con Pestañas */}
      <div className={styles.contentArea}>
        {/* Navegación de Pestañas Simulada */}
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${styles.active}`}>CAPACITADO PARA</button>
          <button className={styles.tab}>INFORMACIÓN GENERAL</button>
          <button className={styles.tab}>PLAN DE ESTUDIOS</button>
        </div>

        <div className={styles.tabContent}>
          <ul>
            {careerData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <div className={styles.actionArea}>
             <p className={styles.note}>Plan aprobado por resolución ministerial.</p>
             <Link to="/register" className={styles.enrollBtn}>INSCRIBIRME AHORA</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;