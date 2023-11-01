import React, { useState } from "react";
import "./OTP.css";
import signupimage from "../../Assets/SignUpImg.svg";
import Logo from "../Logo";
import { useEffect } from "react";
import OTPInput from "react-otp-input";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ck_logo from "../../Assets/CK_LOGO.png";
const OTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const {state} = useLocation();
  const {email, userId} = state;
  // send otp to backend
  // verify otp from backend
  // if otp is verified then redirect to login page
  // else show error message
  console.log(email);
  console.log(userId)
  const handleOtp = async () => {
    const response = await fetch(
      "https://crackube-backend-test.onrender.com/users/sendEmail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${email}&_id=${userId}`
      }
    );
      console.log(response)
    
  };
  const handleVerifyOtp = async (e) => {
    e.preventDefault()
    const response = await fetch(
      "https://crackube-backend-test.onrender.com/users/verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `_id=${userId}&otp=${otp}`
      }
    );
    console.log(response);

    if(response.status === 202) {
      navigate('/third', {state: {userId: userId}})
    }else {
      window.alert("Wrong Otp");
    }

  };

 

  useEffect(() => {
    handleOtp();
  }, []);
  return (
    <div className="container">
      <div className="right-container">
        <div className="signup-logo">
        <div className="signUp_logo-container">
          <img src={ck_logo} alt="logo" className="signUp_logo" />
          <span className="signUpLogo_text">CracKube</span>
        </div>
        </div>
        <div className="signupotp-content">
          <div className="signupotp-heading">
            <p className="text-heading">Please Enter your Verification OTP</p>
            <p className="text-para">
              We have sent one-time password to your registered email
            </p>
          </div>
          <div className="signup-otp">
            
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span></span>}
              renderInput={(props) => <input {...props} />}
              containerStyle={"otp-container"}
              shouldAutoFocus = {true}
              inputStyle={"input-box"}
              inputType="integer"
            />
          </div>
          <div className="signupotp-bottom">
            <p className="resend">
              Didn’t you receive the OTP? <a className="span">Resend</a>
            </p>
            <button className="verifyotp-button" onClick={(e) => handleVerifyOtp(e)}>Verify OTP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
