import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import CardLanding from './CardLanding'
import './LandingPage.css'
import InfoBar from './InfoBar'
import AnswerSection from './AnswerSection'
import BlogSection from './BlogSection'
import FooterSection from './FooterSection'



function LandingPage() {
    return (
        <div className='landing_main_div'>
            <Navbar/>
            <Hero/>
            
            <div className='page_2'>
                <h1 className='features'> Meet Our <span >Unique</span> Features </h1>
                <CardLanding/>

            </div>
            <InfoBar/>
            <AnswerSection/>
            <BlogSection/>
            <FooterSection/>
            
        </div>
    )
}

export default LandingPage