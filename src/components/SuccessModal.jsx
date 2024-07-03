import React from 'react';
import styles from '../assets/css/styles.module.css';

const SuccessModal = ({ onClose }) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <h3>¡Mensaje enviado con éxito!</h3>
        <p>Gracias por contactarme. Te responderé lo antes posible.</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default SuccessModal;