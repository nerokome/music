import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Vision from './components/Vision'
import Join from './components/Join'
import Contact from './components/Contact'

function App() {
  
  return (
    <>
      <div className=' w-full min-h-screen bg-cover bg-center' >
        <Hero />
        <Vision/>
        <Join />
        <Contact/>
      </div>
     
    </>
  )
}

export default App
