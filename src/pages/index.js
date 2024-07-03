import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Interests from '../components/Interests';
import Contact from '../components/Contact';
import styles from '../assets/css/styles.module.css';

const Home = () => (
  <div className={`${styles.container}`}>
    <Head>
      <title>Perfil de Matías Montone</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <About />
    <Interests />
    <Contact />
  </div>
);

export default Home;