import React from 'react'
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar'
import SideBar from '../SideBar'
import homeIcon from '../../Assets/homeIcon.svg'
import { MainBar } from '../Constants'

function Home() {
  return (
    <>
      <div className="home">
   
        <MenuBar>
          <div className="menu-bar-link">
            <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>Home</p></Link>
            <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>Explore</p></Link>
            <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>CK Originals</p></Link>
            <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>Bookmarks</p></Link>
            <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>Your Content</p></Link>
          </div>
        </MenuBar>
        <div className="home-container">
          <MainBar />
        </div>
        <SideBar>
          
        </SideBar>
      </div>
    </>
  )
}

export default Home