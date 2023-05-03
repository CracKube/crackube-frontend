import React from 'react'
import MenuBar from '../MenuBar'

import { MainBar, TopNavBar } from '../Constants'

function Home() {
  return (
    <>
      <div className="home">
        <MenuBar/> 
        <div className="home-container">
          <TopNavBar />
          <MainBar />
        </div>
        
      </div>
    </>
  )
}

export default Home