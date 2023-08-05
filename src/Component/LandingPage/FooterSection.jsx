import React from 'react'
import './FooterSection.css'
import arrowRight from '../../Assets/ion_arrow-up.png'

const FooterSection = () => {
  return (
    <div className='footer_main_div'>
      
        <h1 className='footer_head'> Get early access</h1>
        
      <div className='footer_contact_div'>

        <h2 className='contact_text-prompt'>Sign up to get access to the CracKube beta, developer updates, and more.</h2>
        <div className='contact_bar_div'>
        <input className='contact-bar' 
            type="text" placeholder='enter your email'/>
            <button className='contact-arrow-button'><img src={arrowRight} alt="arrowRight" /></button>
        </div>
        <p className='support_text-email'>support@crackube.com</p>
      </div>
      <div className='footer_nav_div'>
        <div className='footer_company'>
            <img className='footer_company-logo'/>
            <h1 className='footer_company-name'>Crackube</h1>
        </div>
        <div className='footer_nav_content'>
            <ul>
                <li>Home</li>
                <li>Search</li>
                <li>Features</li>
                <li>About Us</li>
            </ul>
        </div>
      </div>
      <div className='footer_end_div'>

      </div>
    </div>
  )
}

export default FooterSection
