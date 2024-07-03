import React, { useEffect, useState } from 'react';
import styles from '../assets/css/styles.module.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className={`${styles.header} ${isVisible ? styles.headerVisible : ''}`}>
      <img src="/imgs/profile.jpeg" alt="Profile Picture" className={styles.profilePic} />
      <h1>Matías Montone</h1>
    </header>
  );
};

export default Header;