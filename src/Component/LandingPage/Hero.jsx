import React from 'react'
import SearchBar from './searchBarcomp/SearchBar'
import './Hero.css'

const Hero = () => {
  return (
    <div className='main_div'>
      <div>

        <h1 className='HeadTagline'>GO BEYOND</h1>
        <h3 className='SubheadTagline'>Space is the limit. Let's Rock It!</h3>
      </div>
      <div className='SearchBarDiv'>
      <SearchBar />
    </div>
    </div>
  )
}

export default Hero
