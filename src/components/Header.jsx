import React from 'react'
import '../styles/Header.css'
const Header = () => {
  return (
    <div className='header-container'>
      <nav>
        <ul className="header-nav">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
