import React from 'react'
import Search from '../../Assets/search.svg'
import { Link, useParams } from 'react-router-dom'
import MenuBar from '../MenuBar'
import { MainBar, TopNavBar } from '../Constants'
import homeIcon from '../../Assets/homeIcon.svg'
import ProfileComponent from './ProfileComponent'
import HiddenComponent from '../Pages/HiddenComponent'
function ProfilePage({theme, setTheme}) {
  return (
    <>
    <div className='home' id = {theme}>
        <MenuBar theme = {theme} setTheme = {setTheme}/> 
      <div className="home-container">
        <TopNavBar theme={theme} />
        <ProfileComponent theme = {theme} />
      
      </div>
    </div>
    <div className='bottom-nav'>
        <HiddenComponent> </HiddenComponent>
      </div>
    </>
    
  )
}

export default ProfilePage