import React from 'react'
import '../styles/Profile-Picture.css'
const ProfilePicture = () => {
  return (
    <div className='profile-picture-container'>
      <img src="../profile.jpg" alt="Profile" />
     <div className='profile-text'>
       <h3>Hi! I'm Teds a Junior Web Developer.</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
     </div>
    </div>
  )
}

export default ProfilePicture
