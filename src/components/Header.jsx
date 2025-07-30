import React from 'react'
import { FaHome } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { MdImportContacts } from "react-icons/md";
import { BsDiagram2Fill } from "react-icons/bs";
import '../styles/Header.css'
const Header = () => {
  return (
    <div className='header-container'>
      <nav>
        <ul className="header-nav">
          <li><FaHome className='header-icon' /></li>
          <li><MdImportContacts className='header-icon' /></li>
          <li><BsDiagram2Fill className='header-icon' /></li>
          <li><RiContactsBook3Fill className='header-icon' /></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
