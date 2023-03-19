import React from 'react'
import Navbar from '../Navbar'

function Login() {
    return (
        <>
            <Navbar/>
            {/* <div className="log-in">
                <div className="login-container">
                    <h1>Welcome Back!</h1>
                    <div className="text-input-container">
                        <label htmlFor="email">Email<span>*</span></label>
                        <input type="email" name="email" id="email" placeholder='Emter your email address'/>
                    </div>
                    <div className="text-input-container">
                        <label htmlFor="password">Password<span>*</span></label>
                        <input type="password" name="password" id="password" placeholder='Emter your password'/>
                    </div>
                    <button type="submit" className='submit-btn'>Login</button>
                    <div className="firebase-logins">
                        <div className="continue-with">
                            <div className="line"></div>
                            <p>or continue with</p>
                            <div className="line"></div>
                        </div>
                        <div className="firebase-logins-btn">
                            <button className='faceook-btn'>Facebook</button>
                            <button className='google-btn'>Google</button>
                            <button className='apple-btn'>Apple</button>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    )
}

export default Login