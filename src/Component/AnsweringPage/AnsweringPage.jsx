import React from 'react'
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar'
import { TopNavBar } from '../Constants'
import homeIcon from '../../Assets/homeIcon.svg'

function AnsweringPage() {
  return (
    <div className='home'>

      <MenuBar>
        <div className="menu-bar-link">
          <Link to='/' className="menu-btn"><img src={homeIcon} alt="" /><p>Home</p></Link>
          <Link to='/search' className="menu-btn"><img src={homeIcon} alt="" /><p>Explore</p></Link>
          <Link to='/' className="menu-btn"><img src={homeIcon} alt="" /><p>CK Originals</p></Link>
          <Link to='/' className="menu-btn"><img src={homeIcon} alt="" /><p>Bookmarks</p></Link>
          <Link to='/' className="menu-btn"><img src={homeIcon} alt="" /><p>Your Content</p></Link>
        </div>
      </MenuBar>
      <div className='home-container'>
        <TopNavBar></TopNavBar>
        <div>
            <div className='ans-line'></div>
        </div>
        
      </div>
    </div>
  )
}

export default AnsweringPage