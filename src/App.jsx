import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Navbar, Hero, AboutUs, Collaboration, Pricing } from './components/index';
import styles from './style';
import Faqs from './components/Faqs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Hero />
          <AboutUs />
          <Collaboration />
          <Pricing />
          <Faqs />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
