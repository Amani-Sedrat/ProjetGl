import React from 'react'
import './footerstyle.css'

export default function Footer() {
  return (
    <header>
    <nav className='navv'>
    <img className='logo' src={require('./images/LOGO.png')} alt="logo" />
    <p id='mail'>Edusearch@gmail.com</p>
    <div className="media">
    <img className='social' src={require('./images/facebook.png')} alt="logo" />
    <img className='social' src={require('./images/instagram-logo.png')} alt="logo" />
    <img className='social' src={require('./images/twitter.png')} alt="logo" />
    </div>
    
      
     
    
    </nav>
    </header>
  )
}
