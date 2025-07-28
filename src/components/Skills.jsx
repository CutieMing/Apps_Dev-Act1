import React from 'react'
import '../styles/Skills.css'
const Skills = () => {
  return (
    <div className='skills-container'>
      <h2>Skills</h2>
      <ul>
        <li><img src="../public/jslogo.png" alt="" /></li>
        <li><img src="../public/Bootstraplogo.png" alt="" /></li>
        <li><img src="../public/CSS.png" alt="" /></li>
        <li><img src="../public/htmllogo.png" alt="" /></li>
        <li><img src="../public/git.png" alt="" /></li>
        <li><img src="../public/php.png" alt="" /></li>
        <li><img src="../public/tailwind.png" alt="" /></li>
      </ul>
      <button className='know-more-button'>Know me more</button>
    </div>
  )
}

export default Skills
