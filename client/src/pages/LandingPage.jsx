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
            Training leading professionals with educational excellence and human values.
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/login" className={styles.primaryBtn}>Campus Login</Link>
            <Link to="/register" className={styles.secondaryBtn}>Enroll Now</Link>
          </div>
        </div>
      </header>

      {/* --- ABOUT US --- */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutText}>
            <h2 className={styles.sectionTitleLeft}>About UniSystem</h2>
            <p>
              For over 40 years, UniSystem has led higher technological education in the region.
              Our mission is to train professionals capable of adapting to constant industry changes,
              with a solid theoretical and practical foundation.
            </p>
            <p>
              We have agreements with major software companies, guaranteeing rapid job placement
              for our graduates. We believe in constant innovation and practical learning.
            </p>
            <Link to="/register" className={styles.textLink}>Learn more about our history &rarr;</Link>
          </div>
          <div className={styles.aboutImage}>
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" 
              alt="UniSystem Campus" 
            />
          </div>
        </div>
      </section>

      {/* --- CAREERS (Now above Stats) --- */}
      <section id="careers" className={styles.careersContainer}>
        <h2 className={styles.sectionTitle}>OUR PROGRAMS</h2>
        
        <div className={styles.careerGrid}>
          <Link to="/career/rrhh" className={styles.careerCard} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80')" }}>
            <div className={styles.overlay}>
              <h3>HUMAN RESOURCES</h3>
            </div>
          </Link>

          <Link to="/career/software" className={styles.careerCard} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80')" }}>
            <div className={styles.overlay}>
              <h3>SOFTWARE DEVELOPMENT</h3>
            </div>
          </Link>

          <Link to="/career/programador" className={styles.careerCard} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80')" }}>
            <div className={styles.overlay}>
              <h3>PROGRAMMER</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* --- STATS --- */}
      <section className={styles.statsSection}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>40</span>
          <span className={styles.statLabel}>Years of Experience</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>+1000</span>
          <span className={styles.statLabel}>Graduates</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>4</span>
          <span className={styles.statLabel}>Official Degrees</span>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <h2>CONTACT US</h2>
          <p>Have questions? Send us a message and we will reply shortly.</p>
          
          <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputRow}>
              <input type="text" placeholder="Full Name" className={styles.input} required />
              <input type="email" placeholder="Email Address" className={styles.input} required />
            </div>
            <input type="text" placeholder="Subject" className={styles.input} required />
            <textarea placeholder="Your message..." className={styles.textarea} rows="5" required></textarea>
            <button type="submit" className={styles.submitBtn}>SEND MESSAGE</button>
          </form>
        </div>
      </section>

      {/* --- INTEGRATED FOOTER --- */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.col}>
            <h3 className={styles.brand}>UniSystem</h3>
            <p className={styles.description}>
              Innovation and educational technology for the future.
            </p>
            <div className={styles.socials}>
              <span title="Facebook">📘</span>
              <span title="Instagram">📸</span>
              <span title="Twitter">🐦</span>
            </div>
          </div>

          <div className={styles.col}>
            <h4>Explore</h4>
            <ul className={styles.linkList}>
              <li><Link to="/career/software">Software Dev</Link></li>
              <li><Link to="/career/rrhh">Human Resources</Link></li>
              <li><Link to="/career/programador">Programming</Link></li>
              <li><Link to="/login">Virtual Campus</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Contact Info</h4>
            <div className={styles.contactItem}>📍 742 Evergreen Terrace</div>
            <div className={styles.contactItem}>✉️ contact@unisystem.edu</div>
            <div className={styles.contactItem}>📞 +1 555 123-4567</div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© 2025 University System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;