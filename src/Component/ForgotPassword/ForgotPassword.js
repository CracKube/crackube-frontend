import React from 'react'
import "../../styles/Sheets/Style.css"
import LoginDesign from '../../Assets/LoginDesign.svg';
import Back from '../../Assets/Back.png';
function ForgotPassword() {
  return (
    <div className='main1'>
        
    <div className='Welcome'>
    <div className='BackButton'>
            <button><img src= {Back} alt="" /></button>
    </div>
        <p className='txt1'>Forget Password</p>
        <p className='req2'> <p className='random'>Enter your e-mail address & we will send you a link to <br /> reset your password</p>  <br /></p>
       
        <form className='emailForm' action=""><p className='Emtxt'>Enter Email</p><input
                    placeholder='Enter your email address'
                    className='Email' type="text" /></form>
        <div className='VerifyButton'>
            <button>Reset password</button>
        </div>
    </div>
    <div className='Design'>
        <img className='img' src= {LoginDesign} alt="" />
    </div >
</div>
  )
}

export default ForgotPassword