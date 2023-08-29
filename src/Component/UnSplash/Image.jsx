import React, { useContext } from 'react'
import './unsplash.css'
import useAxios from '../hooks/useAxios'
import DropDownSplash from '../UploadPage/DropDownSplash'
import { useState } from 'react'
import { createContext } from 'react'
import { StateContext } from '../UploadPage/DropDownSplash'

const Image = ({data, setState, setImage}) => {
  
  const handleImageChange = (e) => {
    
  };
  const handleUnSplash = (e) => {
    console.log('Hello from handler')
    setImage(data.urls.regular)
    setState(false)
    const file = data.urls.regular; 
    
     
  }
  return (
    <div className='unsplash__img' onClick={(e) => handleUnSplash(e)}>
    <a  >
        <img className='' src= {data.urls.regular} alt= {data.alt_description} />
    </a>
    </div>
  )
}

export default Image