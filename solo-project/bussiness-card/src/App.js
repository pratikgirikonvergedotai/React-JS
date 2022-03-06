import React from 'react'
import './App.css'
import Image from './components/Image'
import Button from './components/Button'
import About from './components/About'
import Links from './components/Links'

function App() {
  return (
    <div className="card">
      <Image />
      <Button />
      <About />
      <Links />
    </div>
  )
}

export default App
