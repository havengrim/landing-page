import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar,  Hero, AboutUs, Collaboration, Pricing } from './components/index'
import styles from './style'
function App() {

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <Hero />
        <AboutUs />
        <Collaboration />
        <Pricing />
      </div>
    </div>
  )
}

export default App
