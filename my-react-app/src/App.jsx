import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Vision from './components/Vision'
import Join from './components/Join'
import Contact from './components/Contact'
import Resources from './components/Resources'
import Space from './components/Space'
import End from './components/End'

function App() {
  
  return (
    <>
      <div className="w-full min-h-screen bg-cover bg-center
        sm:bg-contain sm:bg-top
        md:bg-cover md:bg-center
      ">
        <Hero />
        <Vision />
        <Space/>
        <Resources/>
        <Space/>
        <Join />
        <Contact />
        <End/>
      </div>
    </>
  )
}

export default App
