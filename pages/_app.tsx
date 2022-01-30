import type { AppProps } from 'next/app';
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import navlinkObjArr from '../data/navlinkObjArr';
import '../styles/global.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar navlinkObjArr={navlinkObjArr} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
