

import React from 'react'
// import { Link } from 'react-router-dom'
import Logo from './Logo'
import logoutIcon from '../Assets/Logout icon.svg'
import lightIcon from '../Assets/lightIcon.svg'
import DarkIcon from '../Assets/darkIcon.svg'

function MenuBar({children}) {
  return (
    <div className="menu-bar">
        <div className="menu-header">
            <button className="hamburger">
              <div className='bar-1'></div>
              <div className='bar-2'></div>
              <div className='bar-3'></div>
            </button>
            <Logo/>
        </div>
        {children}
        <div className="modes">
            <button className="light-mode"><img src={lightIcon} alt=""/>Light</button>
            <button className="dark-mode"><img src={DarkIcon} alt=""/>Dark</button>
        </div>
        <button className='log-out-btn'><img src={logoutIcon} alt="" /> logout</button>
    </div>
  )
}

export default MenuBar