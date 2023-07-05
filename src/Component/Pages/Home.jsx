import React, { useState } from 'react'
import MenuBar from '../MenuBar'

import { MainBar, TopNavBar } from '../Constants'
import { createContext } from 'react'
export const ThemeContext = createContext(null)
function Home() {
  const [theme, setTheme] = useState("light")
 
  const [state,setState] = useState("Blog")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light"?"dark":"light"));
  }
  return (
    
    <ThemeContext.Provider value={{theme}}>
      <div className="home" id = {theme}>
        <MenuBar theme = {theme} setTheme = {setTheme}/> 
        <div className="home-container" >
          <TopNavBar theme = {theme}/>
          <MainBar  theme = {theme}/>
        </div>
        
      </div>
      </ThemeContext.Provider>
  )
}

export default Home