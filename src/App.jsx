import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes} from "react-router-dom";
import ProfileCard from './components/ProfileCard.jsx'
import Navbar from './components/Navbar.jsx'
import { Route } from 'react-router-dom'
import AboutMe from './components/AboutMe.jsx'
import Skills from './components/Skills.jsx'
import ContactUs from './components/ContactUs.jsx'

function App() {

  return (
    <>
      <div className="h-screen w-screen">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProfileCard />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Router>
        
      </div>
      
    </>
  )
}

export default App
