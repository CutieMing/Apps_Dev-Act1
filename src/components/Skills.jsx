import React from 'react'
import '../styles/Skills.css'
const Skills = () => {
  return (
    <div className='skills-container'>
      <h2>Skills</h2>
      <ul>
        <li><img src="../jslogo.png" alt="" /></li>
        <li><img src="../Bootstraplogo.png" alt="" /></li>
        <li><img src="../CSS.png" alt="" /></li>
        <li><img src="../htmllogo.png" alt="" /></li>
        <li><img src="../git.png" alt="" /></li>
        <li><img src="../php.png" alt="" /></li>
        <li><img src="../tailwind.png" alt="" /></li>
      </ul>
      <button className='know-more-button'>Know me more</button>
    </div>
  )
}

export default Skills
