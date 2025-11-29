import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './CareerDetails.module.css';

const CareerDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('profile');

  // --- BASE DE DATOS DE CARRERAS (MOCK) ---
  const careersDatabase = {
    software: {
      title: 'Higher Technician in Software Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1950&q=80',
      duration: '3 Years',
      level: 'Higher Education',
      modality: 'On-site / Hybrid',
      specialty: 'Information Technology',
      profile: [
        'Develop and produce software artifacts, including design, construction, and verification.',
        'Participate in software design and development projects performing different roles.',
        'Satisfy the needs of institutions, companies, and organizations regarding development.',
        'Acquire positive attitudes towards continuous professional training.',
        'Manage databases and secure information systems.'
      ],
      generalInfo: "The Software Development program prepares you to face the challenges of the digital era. You will learn to create innovative solutions, work in agile teams, and master the most utilized programming languages in the market. Our graduates are highly sought after by technology companies worldwide.",
      equipment: [
        'Three computer labs with i7 processors and 16GB RAM.',
        'Dedicated servers for deployment practices.',
        'Arduino and IoT kits for hardware integration projects.',
        'Gigabit fiber optic internet connection.',
        'Rest areas and coworking spaces.'
      ],
      curriculum: {
        'First Year': ['Programming Logic', 'Systems Architecture', 'Mathematics I', 'English I', 'Communication'],
        'Second Year': ['Object Oriented Programming', 'Databases I', 'Software Engineering', 'Web Development', 'Statistics'],
        'Third Year': ['Mobile Development', 'Advanced Databases', 'Professional Practice', 'Final Project', 'Ethics & Legislation']
      }
    },
    rrhh: {
      title: 'Higher Technician in Human Resources',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1950&q=80',
      duration: '3 Years',
      level: 'Higher Education',
      modality: 'On-site',
      specialty: 'Administration',
      profile: [
        'Manage personnel selection and recruitment processes.',
        'Design training and development plans for employees.',
        'Manage payroll and compensation systems.',
        'Resolve labor conflicts and improve organizational climate.'
      ],
      generalInfo: "Human capital is the most valuable asset of any organization. This career trains you to lead teams, manage talent, and create healthy work environments. You will combine knowledge of psychology, law, and administration.",
      equipment: [
        'Simulation room for job interviews.',
        'Management software (ERP/CRM) for HR practices.',
        'Conference room for group dynamics.',
        'Digital library specialized in labor law.'
      ],
      curriculum: {
        'First Year': ['General Psychology', 'Introduction to HR', 'Business Administration', 'Labor Law I', 'Sociology'],
        'Second Year': ['Group Dynamics', 'Personnel Selection', 'Compensation & Benefits', 'Labor Law II', 'Health & Safety'],
        'Third Year': ['Strategic Management', 'Organizational Coaching', 'Professional Ethics', 'Final Seminar', 'English for Business']
      }
    },
    programador: {
      title: 'Programmer Analyst',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1950&q=80',
      duration: '2 Years',
      level: 'Intermediate',
      modality: '100% Online',
      specialty: 'Coding',
      profile: [
        'Write clean, efficient, and well-documented code.',
        'Test and debug applications.',
        'Collaborate with designers and product managers.',
        'Maintain and update legacy systems.'
      ],
      generalInfo: "An intensive and practical career focused purely on code. Ideal for those who want to enter the labor market quickly as Junior Developers. We focus on Java, Python, and JavaScript technologies.",
      equipment: [
        'Access to AWS/Azure cloud platforms.',
        'GitHub Enterprise licenses.',
        'Virtual environments for testing.',
        '24/7 technical support.'
      ],
      curriculum: {
        'First Year': ['Algorithms', 'Java Fundamentals', 'Python for Data', 'Web Fundamentals (HTML/CSS)', 'Git & Version Control'],
        'Second Year': ['Advanced Java', 'React & Node.js', 'SQL Fundamentals', 'Agile Methodologies', 'Capstone Project']
      }
    }
  };

  const data = careersDatabase[id] || careersDatabase.software;

  useEffect(() => { setActiveTab('profile'); }, [id]);

  return (
    <div className={styles.container}>
      
      {/* Eliminada la TopBar por completo */}

      <header className={styles.header} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${data.image}')` }}>
        <h1>{data.title}</h1>
      </header>

      <div className={styles.infoBanner}>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Duration:</span> {data.duration}
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Level:</span> {data.level}
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Modality:</span> {data.modality}
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Specialty:</span> {data.specialty}
        </div>
      </div>

      <div className={styles.contentArea}>
        
        <div className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'profile' ? styles.active : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            QUALIFIED FOR
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'info' ? styles.active : ''}`}
            onClick={() => setActiveTab('info')}
          >
            GENERAL INFO
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'curriculum' ? styles.active : ''}`}
            onClick={() => setActiveTab('curriculum')}
          >
            SUBJECTS
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'equipment' ? styles.active : ''}`}
            onClick={() => setActiveTab('equipment')}
          >
            EQUIPMENT
          </button>
        </div>

        <div className={styles.tabContent}>
          
          {activeTab === 'profile' && (
            <div className={styles.fadeIn}>
              <h3>Professional Profile</h3>
              <ul className={styles.checkList}>
                {data.profile.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          )}

          {activeTab === 'info' && (
            <div className={styles.fadeIn}>
              <h3>About the Program</h3>
              <p className={styles.generalText}>{data.generalInfo}</p>
              <div className={styles.imageGallery}>
                 <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80" alt="Students" />
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" alt="Working" />
              </div>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div className={`${styles.curriculumGrid} ${styles.fadeIn}`}>
              {Object.entries(data.curriculum).map(([year, subjects]) => (
                <div key={year} className={styles.yearCard}>
                  <h4 className={styles.yearTitle}>{year}</h4>
                  <ul className={styles.subjectList}>
                    {subjects.map((sub, i) => <li key={i}>{sub}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'equipment' && (
            <div className={styles.fadeIn}>
              <h3>Available Resources</h3>
              <ul className={styles.equipList}>
                {data.equipment.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          )}

          <div className={styles.actionArea}>
             <p className={styles.note}>Degrees officially recognized by the Ministry of Education.</p>
             <Link to="/register" className={styles.enrollBtn}>ENROLL IN THIS PROGRAM</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CareerDetails;