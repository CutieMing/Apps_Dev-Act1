import React from 'react'
import '../styles/Profile-Picture.css'
const ProfilePicture = () => {
  return (
    <div className='profile-picture-container'>
      <img src="../profilepic.jpg" alt="Profile" />
     <div className='profile-text'>
       <h3>wazzup 👋,</h3>
       <p>im ruffa mae just call me Ming </p>
     </div>
    </div>
  )
}

export default ProfilePicture
