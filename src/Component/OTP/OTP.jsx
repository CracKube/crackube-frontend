import React, { useState } from "react";
import "./OTP.css";
import signupimage from "../../Assets/SignUpImg.svg";
import Logo from "../Logo";
import { useEffect } from "react";

const OTP = () => {
  const [otp, setOtp] = useState("");
  setOtp(otp);
  // useEffect ( async ()  => {
  //   const response = await fetch(
  //     "https://crackube-backend-test.onrender.com/users/sendEmail",
  //     {
  //       method: "GET",
  //       headers:
  //     }
  //   )
  // })
  // make a otp api call to backend 
  // "https://crackube-backend-test.onrender.com/auth/createUser"
  // {
  useEffect ( async () => {
    const response = await fetch(
      "https://crackube-backend-test.onrender.com/auth/createUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: ``
      }
    );
    const data = await response.json();
    console.log(data);

  })
  return (
    <div className="container">
      <div className="left-container">
        <img src={signupimage} alt="image" className="left-image" />
      </div>
      <div className="right-container">
        <div className="signup-logo">
          <Logo />
        </div>
        <div className="signupotp-content">
          <div className="signupotp-heading">
            <p className="text-heading">Please Enter your Verification OTP</p>
            <p className="text-para">
              We have sent one-time password to your registered email
            </p>
          </div>
          <div className="signup-otp">
            <input className="opt-input" type="number" min="0" max="9"></input>
            <input className="opt-input" type="number" min="0" max="9"></input>
            <input className="opt-input" type="number" min="0" max="9"></input>
            <input className="opt-input" type="number" min="0" max="9"></input>
          </div>
          <div className="signupotp-bottom">
            <p>
              Didn’t you receive the OTP? <span className="span">Resend</span>
            </p>
            <button className="verifyotp-button" >Verify OTP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
