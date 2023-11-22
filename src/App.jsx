import { useState } from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';

function App() {

  return (
    <>
       <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App
