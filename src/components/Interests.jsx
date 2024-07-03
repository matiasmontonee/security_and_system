import React, { useEffect, useState, useRef} from 'react';
import styles from '../assets/css/styles.module.css';
import { FaHeart, FaCheck } from 'react-icons/fa';

const Interests = () => {
  const [isVisible, setIsVisible] = useState(false);
  const interestsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (interestsRef.current) {
        const top = interestsRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.5) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={interestsRef} className={`${styles.interestsSection} ${isVisible ? styles.interestsSectionVisible : ''}`}>
      <h2>Intereses <FaHeart className={styles.hIcons} /></h2>
      <ul>
        <li><FaCheck className={styles.checkIcon} />Diseño y Desarrollo Web.</li>
        <li><FaCheck className={styles.checkIcon} />Frameworks y librerías (React, Vue, Next.js).</li>
        <li><FaCheck className={styles.checkIcon} />Desarrollo Backend (Node.js, Express.js, Laravel).</li>
        <li><FaCheck className={styles.checkIcon} />Inteligencia artificial.</li>
        <li><FaCheck className={styles.checkIcon} />Diseño de interfaces de usuario.</li>
        <li><FaCheck className={styles.checkIcon} />Pruebas automatizadas (Jest, Testing Library, Cypress).</li>
      </ul>
    </section>
  );
};

export default Interests;