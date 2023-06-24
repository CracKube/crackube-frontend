import React from 'react'
import './InfoBar.css'

const InfoBar = () => {
  return (
    <div className='infomain_div'>
      <div className='infotext_div'>
        <h1 className='infoprompt_text'> What<span >You</span> Do? </h1>
      </div>
      <div className='blocks_div'>
        <div className='block block_a fallIn'>
            <p className='block_a_text'>LEARN.</p>
        </div>
        <div className='block block_b'>
            <p>ANSWER.</p>
        </div>
        <div className='block block_c'>
            <p>POST.</p>
        </div>
        <div className='block block_d'>
            <p>EARN.</p>
        </div>
      </div>
    </div>
  )
}

export default InfoBar
