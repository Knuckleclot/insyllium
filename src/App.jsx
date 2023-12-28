import React from 'react'
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Projects from './Components/Projects'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/qr" element={<Navigate to="/" />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
