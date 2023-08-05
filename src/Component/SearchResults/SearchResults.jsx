import style from './results.module.css'
import React, {useEffect, useState} from 'react'
import Search from '../../Assets/search.svg'
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar'
import { MainBar, TopNavBar } from '../Constants'
import ResultCards from './ResultCards'
function SearchResults({theme, setTheme}) {
  return (
    
    <div className='home' id = {theme}>
    <MenuBar theme = {theme} setTheme = {setTheme}/> 
      <div className='home-container'>
        <TopNavBar theme = {theme}/>
        <div className={style.resultCover}>
        <div className={style.resultbox}>
            <ResultCards 
            title = "What is Dropshipping for Beginners? How to Make Money Online in 2021"
            content = "What is Dropshipping for Beginners? How to Make Money Online in 2021 What is Dropshipping for Beginners? How to Make Money Online in 2021 What is Drop...."/>
        </div>
        <div className={style.gptBox}></div>
        </div>
        
    </div>
    </div>
  )
}

export default SearchResults