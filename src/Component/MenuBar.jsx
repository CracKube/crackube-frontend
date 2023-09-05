import { Link } from 'react-router-dom'
import homeIcon from '../Assets/homeIcon.svg'
import Explore from '../Assets/Explore.svg'
import Ck from '../Assets/CK.svg'
import Den from '../Assets/Den.svg'
import React, { useContext } from 'react'
import Logo from './Logo'
import logoutIcon from '../Assets/Logout icon.svg'
import lightIcon from '../Assets/lightIcon.svg'
import DarkIcon from '../Assets/darkIcon.svg'
import Profile from './Profile/Profile'
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react'
import { ThemeContext } from '../App'


function MenuBar({theme, setTheme}) {

  const [lightBtn, setLightBtn] = useState('#000');
  const [darkBtn, setDarkBtn] = useState('#ffffff');
  const {
    logout,
    isAuthenticated
} = useAuth0();
const buttonHandler = ('click', () => {
  setTheme("light")
});

const buttonHandlerDark = ('click', () => {
  setTheme("dark")

});
const clickHandler = () => {
  const toggle = document.getElementById('toggle');
  const sidebar = document.getElementById('crack-logo');
  toggle.onClick = function() {
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');

  }
  
}
  return (
    <div className='crack-logo'>
      <div className="menu-header">
          <Logo/>
        </div>
        
    <div className='menu-wrapper'>
    <div className="menu-bar">
      <div className="menu-bar-half-1">  
        <div className='cover-link'>
        <div className="menu-bar-link">
          <Link to='/home' className="menu-btn"><img src={homeIcon} alt=""/><p>Home</p></Link>
          <Link to='/search' className="menu-btn"><img src={Explore} alt=""/><p>Explore</p></Link>
          <Link to='/' className="menu-btn"><img src={Ck} alt=""/><p>CK Originals</p></Link>
          <Link to='/' className="menu-btn"><img src={Ck} alt=""/><p>CK Experts</p></Link>
          <Link to='/' className="menu-btn"><img src={Den} alt=""/><p>Your Den</p></Link>
        </div>
        </div>
        
      </div>

      

    </div>
    <div className="menu-bar-half-2">
        <div className='profile'>
          <Link to = '/profile'><Profile /></Link>
          
        </div>
        <div className="modes" id = {theme}>
            <button className="light-mode" 
            onClick={() => buttonHandler()}
            ><img src={lightIcon} alt=""/>Light</button>
            <button className="dark-mode" 
            onClick={() => buttonHandlerDark()}
            ><img src={DarkIcon} alt=""/>Dark</button>
           
        </div>
        
      </div>
      </div>
      
    </div>

  )
}

export default MenuBar