import React, { useEffect, useState } from 'react'
import MenuBar from '../MenuBar'

import { MainBar, TopNavBar } from '../Constants'
import { createContext } from 'react'
import { useCookies } from 'react-cookie';
import MainPageComponent from './MainPageComponent';
import HiddenComponent from './HiddenComponent';
import { useLocation } from 'react-router-dom';
import { blue } from '@mui/material/colors';
import axios from 'axios';


export const ThemeContext = createContext()
function Home() {
  const[userId, setUserId] = useState(null);
  
  
  
  
  const [theme, setTheme] = useState("light")
 const [cookies, setCookie] = useCookies(['state']);
 const [blur, setBlur] = useState(false);
 const handleSearchBar = () => {
  document.getElementById('wrapper').style.filter = 'blur(0px)';
  document.getElementById('unblur').style.display = 'none';
 }

 useEffect (() => {
    document.getElementById('unblur').style.display = 'none';
    setUserId(window.localStorage.getItem('userId'));
  }, [])

  return (
    
    <ThemeContext.Provider value={theme}>
      <input type="search" name="search"  className='searchnav' id='unblur' onBlur={handleSearchBar} /> 
      <div id="wrapper">
      <div className="home" id = {theme}  >
        <MenuBar theme = {theme} setTheme = {setTheme} state = {userId}/> 
        <div className="home-container">
          <TopNavBar theme = {theme}/>
          <MainBar theme = {theme}/>
    </div>

      </div>
      </div>
      <div className='bottom-nav'>
        <HiddenComponent> </HiddenComponent>
      </div>
      </ThemeContext.Provider>
  )
}

export default Home