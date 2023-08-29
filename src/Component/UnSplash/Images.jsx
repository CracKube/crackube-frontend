import React from 'react'
import { useContext } from 'react'
import { ImageContext } from './UnSplash'
import Image from './Image'
import './unsplash.css'


const Images = ({setFile, setState, setImage}) => {
  const {response, isLoading, searchImage} = useContext(ImageContext)
  return (
    <>
        <div>Results for {searchImage || ''}</div>
        <div className="unsplash-img">
        {response.map((data,key) => <Image key = {key}  data = {data} setState = {setState} setImage = {setImage}/>)}
        </div>
        
    </>

  )
}

export default Images