import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar,  Hero } from './components/index'
import styles from './style'
import AboutUs from './components/AboutUs'

function App() {

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <Hero />
        <AboutUs />
      </div>
    </div>
  )
}

export default App
