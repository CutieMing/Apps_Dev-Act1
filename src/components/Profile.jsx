import React from 'react'
import ProfilePicture from './ProfilePicture'
import Skills from './Skills'
import Aboutme from './Aboutme'
import '../styles/Profile.css'

const Profile = () => {
  return (
    <div className="profile-container">
      <ProfilePicture />
      <Aboutme />
      <Skills />
    </div>
  )
}

export default Profile
