import React, { useState } from "react";
import "./SignUp.css";
import signupimage from "../../Assets/SignUpImg.svg";
import Logo from "../Logo";
import apple from "../../Assets/Apple.svg";
import facebook from "../../Assets/Facebook.svg";
import twitter from "../../Assets/Twitter.svg";
import google from "../../Assets/Google.svg";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUP = async (e) => {
    // https://crackube-backend-test.onrender.com/users/createUser
    // http://localhost:5000/users/createUser
    //url encoded
    e.preventDefault();
    const response = await fetch(
      "https://crackube-backend-test.onrender.com/auth/createUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${email}&password=${password}&firstName=${username}&lastName=${username
        }`
      }
    );

    const data = await response.json();
    console.log(data)
    if (data.message === "User already exists") {
      window.alert("User already exists");
    } else {
      window.alert("User created successfully");
      window.location.href = "/otp";
    }

   
  };


  const handleGoogleLogin = async () =>{
    window.location.href = 'https://crackube-backend-test.onrender.com/auth/google'
  }
  const handleMicrosoftLogin = async () =>{
    window.location.href = 'https://crackube-backend-test.onrender.com/auth/microsoft'
  }

  return (
    <div className="container">
      <div className="left-container">
        <img src={signupimage} alt="image" className="left-image" />
      </div>
      <div className="right-container">
        <div className="signup-logo">
          <Logo />
        </div>
        <div className="signup-content">
          <div className="signup-content-top">
            <p className="text-account">Create your account</p>
            <p className="text-para">
              Let’s get started with your new journey with CracKube
            </p>
          </div>
          <div className="signup-icons">
            <div className="apple-oauth-wrapper icon-container">
              <img src={apple} alt="apple" />
            </div>
            <div className="facebook-oauth-wrapper icon-container">
              <img src={facebook} alt="facebook" />
            </div>
            <div className="twitter-oauth-wrapper icon-container">
              <img src={twitter} alt="twitter" />
            </div>
            <div className="google-oauth-wrapper icon-container" onClick={() => handleGoogleLogin()}>
              <img src={google} alt="google" />
            </div>
          </div>
          <p className="text-or">or</p>
          <form className="signup-form" >
            <div className="form-group">
              <label htmlFor="username">Fullname</label>
              <input
                type="text"
                id="username"
                value={username}
                placeholder="Enter your full name"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Enter your name"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input
                type="password"
                id="confirmpassword"
                value={confirmPassword}
                placeholder="Confirm your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <p>
              By Signing Up, you agree to{" "}
              <span className="span">terms of use</span> and{" "}
              <span className="span">privacy statements.</span>
            </p>
            <button type="submit" className="signup-button" onClick={(e) => handleSignUP(e)}>
              Sign Up
            </button>
            <p>
              Already have an account?<span className="span-login">Log In</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
