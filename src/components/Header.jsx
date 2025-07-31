import React from 'react'
import '../styles/Header.css'
import { ImProfile } from "react-icons/im";

const Header = () => {
  return (
    <div className='header-container'>
      <nav>
        <ul className="header-nav">
        <li>My Profile    <ImProfile /></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
