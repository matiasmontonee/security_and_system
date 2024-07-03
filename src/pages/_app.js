import React from 'react';
import '../assets/css/globals.css';
import '../assets/css/styles.module.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;