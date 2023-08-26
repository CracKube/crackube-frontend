import React, { useState } from 'react'
import MenuBar from '../MenuBar'

import { MainBar, TopNavBar } from '../Constants'
import { createContext } from 'react'
import { useCookies } from 'react-cookie';
import MainPageComponent from './MainPageComponent';
import HiddenComponent from './HiddenComponent';
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
      <div className='bottom-nav'>
        <HiddenComponent> </HiddenComponent>
      </div>
      </ThemeContext.Provider>
  )
}

export default Home