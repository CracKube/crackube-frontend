import React, { useState } from 'react'
import MenuBar from '../Component/MenuBar';

import { createContext } from 'react'
import { useCookies } from 'react-cookie';
import HiddenComponent from '../Component/Pages/HiddenComponent';
import CodeMainComponent from './CodeMainComponent';
export const ThemeContext = createContext(null)
function Code() {
  const [theme, setTheme] = useState("light")
 const [cookies, setCookie] = useCookies(['state']);
  return (
    
    <ThemeContext.Provider value={{theme}}>
      <div className="home" id = {theme}>
        <MenuBar theme = {theme} setTheme = {setTheme}/> 
        <CodeMainComponent theme = {theme} setTheme = {setTheme}/>

      </div>
      <div className='bottom-nav'>
        <HiddenComponent> </HiddenComponent>
      </div>
      </ThemeContext.Provider>
  )
}

export default Code