import React from 'react'
import { MainBar, TopNavBar } from '../Constants'
function MainPageComponent({theme}) {
  return (
    <div className="home-container">
          <TopNavBar theme = {theme}/>
          <MainBar  theme = {theme}/>
    </div>
  )
}

export default MainPageComponent