import React from 'react'
import "../../styles/Sheets/Style.css"
import LoginDesign from '../../Assets/LoginDesign.svg';
import Back from '../../Assets/Back.png';
function OTP() {
  return (
    <div className='main1'>
        
    <div className='Welcome'>
    <div className='BackButton'>
            <button><img src= {Back} alt="" /></button>
    </div>
        <p className='txt1'>Verification Code</p>
        <p className='req2'> <p className='random'>Please enter 4-digit code sent to</p>  <br /> <p className='mailId'> abc@email.com</p></p>

    <div className='codeBox'>
        <div className='BOX'><form action=""><input min= "0" max= "1" type="text" /></form></div>
        <div className='BOX'><input min= "0" max= "1" type="text" /></div>
        <div className='BOX'><input min= "0" max= "1" type="text" /></div>
        <div className='BOX'><input min= "0" max= "1" type="text" /></div>
    </div>   
        <p className='Code'>Didn't receive the code?</p>
        <div className='VerifyButton'>
            <button>Verify your Email</button>
        </div>
    </div>
    <div className='Design'>
        <img className='img' src= {LoginDesign} alt="" />
    </div >
</div>
  )
}

export default OTP