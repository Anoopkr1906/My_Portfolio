import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 bg-gray-800 text-white relative"
         style={{ fontFamily: "Fondamento, cursive" }}>
      <div className="text-lg sm:text-xl lg:text-2xl font-bold">Anoop's Portfolio</div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 lg:space-x-10 text-lg lg:text-xl">
        <li>
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        </li>
        <li>
          <Link to="/AboutMe" className="hover:text-blue-400 transition">About Me</Link>
        </li>
        <li>
          <Link to="/Skills" className="hover:text-blue-400 transition">Skills</Link>
        </li>
        <li>
          <Link to="/Projects" className="hover:text-blue-400 transition">Projects</Link>
        </li>
        <li>
          <Link to="/ContactUs" className="hover:text-blue-400 transition">Contact</Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex flex-col space-y-1 p-2"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-gray-800 transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <ul className="flex flex-col space-y-4 p-4 text-lg">
          <li>
            <Link 
              to="/" 
              className="block hover:text-blue-400 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/AboutMe" 
              className="block hover:text-blue-400 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link 
              to="/Skills" 
              className="block hover:text-blue-400 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              to="/Projects" 
              className="block hover:text-blue-400 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/ContactUs" 
              className="block hover:text-blue-400 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
