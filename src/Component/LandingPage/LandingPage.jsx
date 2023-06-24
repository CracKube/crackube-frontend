import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import CardLanding from './CardLanding'
import './LandingPage.css'


function LandingPage() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <h1 className='features'> Meet Our <span >Unique</span> Features </h1>
            <CardLanding/>
            
        </>
    )
}

export default LandingPage