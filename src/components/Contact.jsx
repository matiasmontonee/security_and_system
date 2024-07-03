import React, { useState, useEffect, useRef } from 'react';
import styles from '../assets/css/styles.module.css';
import SuccessModal from './SuccessModal';
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (contactRef.current) {
        const top = contactRef.current.getBoundingClientRect().top;
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    if (!form.name.trim()) {
      errors.name = 'El nombre es requerido';
    }
    if (!form.email.trim()) {
      errors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = 'El formate del correo es inválido';
    }
    if (!form.message.trim()) {
      errors.message = 'El mensaje es requerido';
    }

    if (Object.keys(errors).length === 0) {
      setShowModal(true);
    } else {
      setErrors(errors);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setForm({ name: '', email: '', message: '' });
    setErrors({name: '', email: '', message: ''});
  };

  return (
    <section ref={contactRef} className={`${styles.contactSection} ${isVisible ? styles.contactSectionVisible : ''}`}>
      <h2>Contáctame <FaPhoneAlt className={styles.hIcons} /></h2>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <label>
            Nombre
            <input type="text" name="name" value={form.name} onChange={handleChange} className={errors.name ? styles.inputError : ''} />
            {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} className={errors.email ? styles.inputError : ''} />
            {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
          </label>
          <label>
            Mensaje
            <textarea name="message" value={form.message} onChange={handleChange} className={errors.message ? styles.inputError : ''}></textarea>
            {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
          </label>

          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>

        {showModal && <SuccessModal onClose={closeModal} />}
    </section>
  );
};

export default Contact;