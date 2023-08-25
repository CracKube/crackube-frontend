import React, { useState } from 'react'
import MenuBar from '../MenuBar'

import { MainBar, TopNavBar } from '../Constants'
import { createContext } from 'react'
import { useCookies } from 'react-cookie';
import MainPageComponent from './MainPageComponent';

export const ThemeContext = createContext(null)
function Home() {
  const [theme, setTheme] = useState("light")
 const [cookies, setCookie] = useCookies(['state']);
  return (
    
    <ThemeContext.Provider value={{theme}}>
      <div className="home" id = {theme}>
        <MenuBar theme = {theme} setTheme = {setTheme}/> 
        <MainPageComponent theme = {theme} setTheme = {setTheme}/>  
       
      </div>
      </ThemeContext.Provider>
  )
}

export default Home