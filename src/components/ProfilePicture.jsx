import React from 'react'
import '../styles/Profile-Picture.css'
const ProfilePicture = () => {
  return (
    <div className='profile-picture-container'>
      <img src="../profile.jpg" alt="Profile" />
     <div className='profile-text'>
       <h3>Hi there, I’m Teds 👋</h3>
      <p className='profile-text'>- 🎓 Studying Information Technology (BSIT).</p>
      <p className='profile-text'>- 💻 Exploring web development with Vite + React.</p>
      <p className='profile-text'>- 🚀 Working on projects like e-commerce systems and mini-market apps.</p>
      <p className='profile-text'>- 🌱 Learning new technologies and improving my skills.</p>
     </div>
    </div>
  )
}

export default ProfilePicture
