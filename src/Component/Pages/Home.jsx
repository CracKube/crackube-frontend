import React, { useState } from 'react'
import MenuBar from '../MenuBar'

import { MainBar, TopNavBar } from '../Constants'
import { createContext } from 'react'
export const ThemeContext = createContext(null)
function Home() {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light"?"dark":"light"));
  }
  return (
    
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="home" id = {theme}>
        <MenuBar/> 
        <div className="home-container" id = {theme}>
          <TopNavBar />
          <MainBar />
        </div>
        
      </div>
      </ThemeContext.Provider>
  )
}

export default Home