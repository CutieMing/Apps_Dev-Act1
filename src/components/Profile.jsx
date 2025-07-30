import React from 'react'
import ProfilePicture from './ProfilePicture'
import Skills from './Skills'
import Aboutme from './Aboutme'
import '../styles/Profile.css'
import Button from './Button'

const Profile = () => {
  return (
    <div className="profile-container">
      <ProfilePicture />
      <Aboutme />
      <Skills />
      <Button />
    </div>
  )
}

export default Profile
