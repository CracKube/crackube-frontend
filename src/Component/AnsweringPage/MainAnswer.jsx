import React from 'react'
import Search from '../../Assets/search.svg'
import { Link, useParams } from 'react-router-dom'
import MenuBar from '../MenuBar'
import { MainBar, TopNavBar } from '../Constants'
import HiddenComponent from '../Pages/HiddenComponent'
import AnsweringPage from './AnsweringPage'
function MainAnswer({theme, setTheme}) {
  return (
    <>
    <div className='home' id = {theme}>
        <MenuBar theme = {theme} setTheme = {setTheme}/> 
      <div className="home-container">
        <TopNavBar theme={theme} />
        <AnsweringPage />
      
      </div>
    </div>
    <div className='bottom-nav'>
        <HiddenComponent> </HiddenComponent>
      </div>
    </>
    
  )
}

export default MainAnswer