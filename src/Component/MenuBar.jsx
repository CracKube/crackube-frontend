import { Link } from 'react-router-dom'
import homeIcon from '../Assets/homeIcon.svg'
import React from 'react'
import Logo from './Logo'
import logoutIcon from '../Assets/Logout icon.svg'
import lightIcon from '../Assets/lightIcon.svg'
import DarkIcon from '../Assets/darkIcon.svg'
import Profile from './Profile/Profile'
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react'


function MenuBar() {
  const [lightBtn, setLightBtn] = useState('#000');
  const [darkBtn, setDarkBtn] = useState('#ffffff');
  const {
    logout,
    isAuthenticated
} = useAuth0();
const buttonHandler = ('click', () => {
  const button = document.querySelector(".light-mode");
  const dark_button = document.querySelector(".dark-mode");
  button.classList.add("dark-mode");
  button.classList.remove("light-mode")
  dark_button.classList.add("light-mode")
  dark_button.classList.remove("dark-mode")

  // Remove the class after the animation duration (1 seconds)
});
const buttonHandlerDark = ('click', () => {
  const button = document.querySelector(".light-mode");
  const dark_button = document.querySelector(".dark-mode");
  button.classList.add("dark-mode");
  button.classList.remove("light-mode")
  dark_button.classList.add("light-mode")
  dark_button.classList.remove("dark-mode")

  // Remove the class after the animation duration (1 seconds)
});
  return (
    <div className="menu-bar">

      <div className="menu-bar-half-1">
        <div className="menu-header">
          <button className="hamburger">
            <div className='bar-1'></div>
            <div className='bar-2'></div>
            <div className='bar-3'></div>
          </button>
          <Logo/>
        </div>
        <div className="menu-bar-link">
          <Link to='/home' className="menu-btn"><img src={homeIcon} alt=""/><p>Home</p></Link>
          <Link to='/search' className="menu-btn"><img src={homeIcon} alt=""/><p>Explore</p></Link>
          <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>CK Originals</p></Link>
          <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>Bookmarks</p></Link>
          <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>Your Content</p></Link>
        </div>
      </div>

      <div className="menu-bar-half-2">
        <div className='profile'>
          <Profile />
        </div>
        <div className="modes">
            <button className="light-mode"
            onClick={() => buttonHandler()}
            ><img src={lightIcon} alt=""/>Light</button>
            <button className="dark-mode"
            onClick={() => buttonHandlerDark()}
            ><img src={DarkIcon} alt=""/>Dark</button>
        </div>
        <button className='log-out-btn'
        ><img src={logoutIcon}
        onClick={() => logout()}
        alt=""/> logout</button>
      </div>

    </div>
  )
}

export default MenuBar