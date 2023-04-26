import React from 'react';
import "../../styles/Sheets/Style.css"
import LoginDesign from '../../Assets/LoginDesign.svg';
import { NavLink } from "react-router-dom";
import OTP from "../../Component/OTP Page/OTP.js"
function Signup() {
    return (
        <div className='main1'>
            <div className='Welcome'>
                <p className='txt'>Welcome back!</p>
                <p className='req'>Dont have an account? <a>SignUp</a> </p>
                <form action=""><p className='Emtxt'>Email*</p><input
                    placeholder='Enter your email address'
                    className='Email' type="text" /></form>
                <form action=""><p className='Patxt'>Password*</p><input
                    placeholder='Enter your password'
                    className='Password' type="text" /></form>
                <div className='sep'>
                    <div className='checkBox'></div>
                    <p className='rem'>  Remember me</p>
                    <NavLink className='for'to="/otp"> Forgot password </NavLink>
                </div>
                <div className='Button'>
                    <button>Login</button>
                </div>
                <div className='separator'>
                    <div className='left'>

                    </div>
                    <div>
                        <p>or continue with</p>
                    </div>
                    <div className='left'>

                    </div>

                </div>
                <div className='Align'>
                    <div className='Google'>

                    </div>
                    <div className='Facebook'>

                    </div>
                    <div className='Apple'>

                    </div>
                </div>
            </div>
            <div className='Design'>
                <img className='img' src={LoginDesign} alt="" />
            </div >
        </div>

    )
}

export default Signup;