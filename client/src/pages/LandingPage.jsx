import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      {/* --- HERO SECTION --- */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>University Academic System</h1>
          <p className={styles.subtitle}>
            Formando profesionales líderes con excelencia educativa y valores humanos.
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/login" className={styles.primaryBtn}>Ingresar al Campus</Link>
            <Link to="/register" className={styles.secondaryBtn}>Inscripciones Abiertas</Link>
          </div>
        </div>
      </header>

      {/* --- SOBRE NOSOTROS --- */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutText}>
            <h2 className={styles.sectionTitleLeft}>Sobre UniSystem</h2>
            <p>
              Desde hace más de 40 años, UniSystem lidera la educación superior tecnológica en la región. 
              Nuestra misión es formar profesionales capaces de adaptarse a los cambios constantes de la industria, 
              con una sólida base teórica y práctica.
            </p>
            <p>
              Contamos con convenios con las principales empresas de software, garantizando una rápida inserción laboral 
              para nuestros egresados. Creemos en la innovación constante y en el aprendizaje práctico.
            </p>
            <Link to="/register" className={styles.textLink}>Conoce más sobre nuestra historia &rarr;</Link>
          </div>
          <div className={styles.aboutImage}>
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" 
              alt="Campus UniSystem" 
            />
          </div>
        </div>
      </section>

      {/* --- CARRERAS (Ahora arriba de Estadísticas) --- */}
      <section id="carreras" className={styles.careersContainer}>
        <h2 className={styles.sectionTitle}>NUESTRAS CARRERAS</h2>
        
        <div className={styles.careerGrid}>
          <Link to="/career/rrhh" className={styles.careerCard} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80')" }}>
            <div className={styles.overlay}>
              <h3>RECURSOS HUMANOS</h3>
            </div>
          </Link>

          <Link to="/career/software" className={styles.careerCard} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80')" }}>
            <div className={styles.overlay}>
              <h3>DESARROLLO DE SOFTWARE</h3>
            </div>
          </Link>

          <Link to="/career/programador" className={styles.careerCard} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80')" }}>
            <div className={styles.overlay}>
              <h3>PROGRAMADOR</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* --- ESTADÍSTICAS (Ahora aquí abajo) --- */}
      <section className={styles.statsSection}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>40</span>
          <span className={styles.statLabel}>Años de Trayectoria</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>+1000</span>
          <span className={styles.statLabel}>Graduados</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>4</span>
          <span className={styles.statLabel}>Carreras Oficiales</span>
        </div>
      </section>

      {/* --- CONTACTO --- */}
      <section id="contacto" className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <h2>CONTACTO</h2>
          <p>¿Tienes dudas? Envíanos un mensaje y te responderemos a la brevedad.</p>
          
          <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputRow}>
              <input type="text" placeholder="Nombre y Apellido" className={styles.input} required />
              <input type="email" placeholder="Email" className={styles.input} required />
            </div>
            <input type="text" placeholder="Asunto" className={styles.input} required />
            <textarea placeholder="Tu mensaje..." className={styles.textarea} rows="5" required></textarea>
            <button type="submit" className={styles.submitBtn}>ENVIAR MENSAJE</button>
          </form>
        </div>
      </section>

      {/* --- FOOTER INTEGRADO --- */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.col}>
            <h3 className={styles.brand}>UniSystem</h3>
            <p className={styles.description}>
              Innovación y tecnología educativa para el futuro.
            </p>
            <div className={styles.socials}>
              <span title="Facebook">📘</span>
              <span title="Instagram">📸</span>
              <span title="Twitter">🐦</span>
            </div>
          </div>

          <div className={styles.col}>
            <h4>Explorar</h4>
            <ul className={styles.linkList}>
              <li><Link to="/career/software">Software</Link></li>
              <li><Link to="/career/rrhh">RRHH</Link></li>
              <li><Link to="/career/programador">Programación</Link></li>
              <li><Link to="/login">Campus</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Contacto</h4>
            <div className={styles.contactItem}>📍 Av. Siempre Viva 742</div>
            <div className={styles.contactItem}>✉️ contacto@unisystem.edu</div>
            <div className={styles.contactItem}>📞 +54 9 11 1234-5678</div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© 2025 University System. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;