import React, { useState } from 'react';
import "../../styles/Sheets/Style.css"
import LoginDesign from '../../Assets/LoginDesign.svg';
import { NavLink } from "react-router-dom";
import OTP from "../../Component/OTP Page/OTP.js"
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { LoginSocialFacebook } from 'reactjs-social-login';

function Signup() {
    const [loginStatus, setLoginStatus] = useState(false);
    const {
        loginWithPopup,
        loginWithRedirect,
        user,
        logout,
        isAuthenciated,
        getAccessTokenSilently
    } = useAuth0();
    async function  callProtectApi() {
        try{
            const token = await getAccessTokenSilently();
            const response = await axios.get("http://localhost:5000/protect", {
                headers : {
                    authorization: `Bearer ${token}`
                }
            });
        }catch(error) {
            console.log(error)
        }
       
    }


    const handleLogin = async () => {
        //https://crackube-backend-test.onrender.com/users/signIn
        //url encoded
        console.log("Login clicked:");
        const email = document.querySelector(".Email").value;
        const password = document.querySelector(".Password").value;



        const response = await fetch("https://crackube-backend-test.onrender.com/auth/signIn", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `email=${email}&password=${password}`
        })
        const data = await response.json();
        console.log(data);
        if (data.message === "Successfully logged in...") {

            setLoginStatus(true);
            window.location.href = '/home';
        }else {
            alert("Invalid email or password")
        }
    }
    return (
        <div className='main1'>
            <div className='Welcome'>
                <p className='txt'>Welcome back!</p>
                <p className='req'>Dont have an account? <a href="/login">SignUp</a> </p>
                <form action=""><p className='Emtxt'>Email*</p><input
                    placeholder='Enter your email address'
                    className='Email' type="text" /></form>
                <form action=""><p className='Patxt'>Password*</p><input
                    placeholder='Enter your password'
                    className='Password' type="text" /></form>
                <div className='sep'>
                    <div className='checkBox'></div>
                    <p className='rem'>  Remember me</p>
                    <NavLink className='for' to="/otp"> Forgot password </NavLink>
                </div>
                <div className='Button'>
                    <button
                        onClick={() => handleLogin()}
                    >Login</button>
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
                    
                        <LoginSocialFacebook 
                        appId = "834219138096228"
                        onResolve={ (response) => {
                            console.log(response);
                        }}
                        onReject={(error) => {
                            console.log(error)
                        }}>
                        <div className='Facebook'>
                        </div>
                        </LoginSocialFacebook>
                    
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