import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-800 text-white"
         style={{ fontFamily: "Fondamento, cursive" }}>
      <div className="text-2xl font-bold">Anoop's Portfolio</div>
      <ul className="flex space-x-10 text-2xl">
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
    </nav>
  )
}

export default Navbar
