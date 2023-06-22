import { Link } from 'react-router-dom'
import homeIcon from '../Assets/homeIcon.svg'
import React from 'react'
import Logo from './Logo'
import logoutIcon from '../Assets/Logout icon.svg'
import lightIcon from '../Assets/lightIcon.svg'
import DarkIcon from '../Assets/darkIcon.svg'
import Profile from './Profile/Profile'

function MenuBar() {
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
            <button className="light-mode"><img src={lightIcon} alt=""/>Light</button>
            <button className="dark-mode"><img src={DarkIcon} alt=""/>Dark</button>
        </div>
        <button className='log-out-btn'><img src={logoutIcon} alt=""/> logout</button>
      </div>

    </div>
  )
}

export default MenuBar