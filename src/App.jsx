import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Footer from './components/Footer'
import './styles/App.css'
const App = () => {
  return (
    <div>
      <Header></Header>
      <div className='app-container'>
        <Profile></Profile>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
