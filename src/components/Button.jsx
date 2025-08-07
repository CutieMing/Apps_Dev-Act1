import React from 'react'
import '../styles/Button.css'

const Button = () => {
  return (
    <div className='button-container'>
    <button className='know-more-button'  onClick={() => window.location.href = 'https://www.facebook.com/ruffa.mae.cuizon.augosto'} >Get to Know me</button>
    </div>
  )
}

export default Button
