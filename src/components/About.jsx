import React, { useEffect, useState } from 'react';
import styles from '../assets/css/styles.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaUser } from 'react-icons/fa';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className={`${styles.aboutSection} ${isVisible ? styles.aboutSectionVisible : ''}`}>
      <h2>Sobre mí <FaUser className={styles.hIcons} /></h2>
      <p>Hola, mi nombre es Matías Montone, y soy un Desarrollador y Diseñador Web apasionado por crear experiencias digitales atractivas y funcionales. Con más de 2 años de experiencia en el sector, he trabajado en una variedad de proyectos que van desde sitios web personales hasta complejas aplicaciones empresariales. Me encanta aprender nuevas tecnologías y mejorar continuamente mis habilidades. En mi tiempo libre, disfruto de relizar actividad física y explorar nuevas culturas a través de viajes.</p>
      <div className={styles.iconContainer}>
        <a href="https://github.com/matiasmontonee" target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.icon} />
        </a>
        <a href="https://linkedin.com/in/matiasmontone" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.icon} />
        </a>
        <a href="mailto:matiasmontonedev@gmail.com" rel="noopener noreferrer">
          <FaEnvelope className={styles.icon} />
        </a>
      </div>
    </section>
  );
};

export default About;