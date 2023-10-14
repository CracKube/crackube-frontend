// import React, { useState } from "react";
// import "./OTP.css";
// import signupimage from "../../Assets/SignUpImg.svg";
// import Logo from "../Logo";
// import { useEffect } from "react";
// import OTPInput from "react-otp-input";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// const OTP = () => {
//   const navigate = useNavigate();
//   const [otp, setOtp] = useState("");
//   const { state } = useLocation();
//   const { email, userId } = state;
//   // send otp to backend
//   // verify otp from backend
//   // if otp is verified then redirect to login page
//   // else show error message
//   console.log(email);
//   console.log(userId);
//   const handleOtp = async () => {
//     const response = await fetch(
//       "https://crackube-backend-test.onrender.com/users/sendEmail",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: `email=${email}&_id=${userId}`,
//       }
//     );
//     console.log(response);
//   };
//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     const response = await fetch(
//       "https://crackube-backend-test.onrender.com/users/verify",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: `_id=${userId}&otp=${otp}`,
//       }
//     );
//     console.log(response);

//     if (response.status === 202) {
//       navigate("/third", { state: { userId: userId } });
//     } else {
//       window.alert("Wrong Otp");
//     }
//   };

//   useEffect(() => {
//     handleOtp();
//   }, []);
//   return (
//     <div className="container">
//       <div className="left-container">
//         <img src={signupimage} alt="image" className="left-image" />
//       </div>
//       <div className="right-container">
//         <div className="signup-logo">
//           <Logo />
//         </div>
//         <div className="signupotp-content">
//           <div className="signupotp-heading">
//             <p className="text-heading">Please Enter your Verification OTP</p>
//             <p className="text-para">
//               We have sent one-time password to your registered email
//             </p>
//           </div>
//           <div className="signup-otp">
//             <OTPInput
//               value={otp}
//               onChange={setOtp}
//               numInputs={4}
//               renderSeparator={<span></span>}
//               renderInput={(props) => <input {...props} />}
//               containerStyle={"otp-container"}
//               shouldAutoFocus={true}
//               inputStyle={"input-box"}
//               inputType="integer"
//             />
//           </div>
//           <div className="signupotp-bottom">
//             <p>
//               Didn’t you receive the OTP? <span className="span">Resend</span>
//             </p>
//             <button
//               className="verifyotp-button"
//               onClick={(e) => handleVerifyOtp(e)}
//             >
//               Verify OTP
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OTP;

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Assets
import ck_logo from "../../Assets/CK_LOGO.png";
import signUp_image from "../../Assets/SignUpImage.png";

import "./OTP.css";

const OTP = () => {
  const navigate = useNavigate();
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");

  const [otp, setOtp] = useState("");
  const { state } = useLocation();
  const { email, userId } = state;
  // send otp to backend
  // verify otp from backend
  // if otp is verified then redirect to login page
  // else show error message
  console.log(email);
  console.log(userId);
  const handleOtp = async () => {
    const response = await fetch(
      "https://crackube-backend-test.onrender.com/users/sendEmail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${email}&_id=${userId}`,
      }
    );
    console.log(response);
  };
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const actualOtp = otp1 + otp2 + otp3 + otp4;
    setOtp(actualOtp);

    const response = await fetch(
      "https://crackube-backend-test.onrender.com/users/verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `_id=${userId}&otp=${otp}`,
      }
    );
    console.log(response);

    if (response.status === 202) {
      navigate("/third", { state: { userId: userId } });
    } else {
      window.alert("Wrong Otp");
    }
  };

  useEffect(() => {
    handleOtp();
  }, []);

  return (
    <div className="forgotPassword_container">
      <img src={signUp_image} alt="signUp_image" className="signUpImage" />
      <div className="signup_back-mobile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.0603 21.5459C16.3415 21.2646 16.4995 20.8832 16.4995 20.4854C16.4995 20.0877 16.3415 19.7062 16.0603 19.4249L8.63533 11.9999L16.0603 4.57493C16.3336 4.29202 16.4848 3.91312 16.4813 3.51983C16.4779 3.12653 16.3202 2.75031 16.0421 2.4722C15.7639 2.19409 15.3877 2.03634 14.9944 2.03292C14.6011 2.0295 14.2222 2.18069 13.9393 2.45393L5.45383 10.9394C5.17262 11.2207 5.01465 11.6022 5.01465 11.9999C5.01465 12.3977 5.17262 12.7791 5.45383 13.0604L13.9393 21.5459C14.2206 21.8271 14.6021 21.9851 14.9998 21.9851C15.3976 21.9851 15.779 21.8271 16.0603 21.5459Z"
            fill="#737373"
          />
        </svg>
      </div>
      <div className="forgotPassword_form-container">
        <div className="signUp_logo-container">
          <img src={ck_logo} alt="logo" className="signUp_logo" />
          <span className="signUpLogo_text">CracKube</span>
        </div>
        <span className="signUp_title">Please Enter your Verification OTP</span>
        <p className="signUp_para">
          We have sent one-time password to your registered email <br />
          registered email.
        </p>
        <p className="otp_para-mobile">
          We have sent one-time password to your registered email registered
          email.
        </p>
        <div className="signUpForm">
          <div className="otp_formContainer">
            <div className="otp_box">
              <input
                type="text"
                className="otp_input"
                value={otp1}
                onChange={(e) => setOtp1(e.target.value)}
              />
            </div>
            <div className="otp_box">
              <input
                type="text"
                className="otp_input"
                value={otp2}
                onChange={(e) => setOtp2(e.target.value)}
              />
            </div>
            <div className="otp_box">
              <input
                type="text"
                className="otp_input"
                value={otp3}
                onChange={(e) => setOtp3(e.target.value)}
              />
            </div>
            <div className="otp_box">
              <input
                type="text"
                className="otp_input"
                value={otp4}
                onChange={(e) => setOtp4(e.target.value)}
              />
            </div>
          </div>
        </div>
        <p className="signUp_para2 mobile">
          Didn't you receive the OTP?{" "}
          <span
            className="login_link"
            onClick={() => {
              navigate("/signUp");
            }}
            style={{
              color: "red",
            }}
          >
            Resend
          </span>
        </p>
        <p className="otp_para2-mobile">
          Didn't you receive the OTP?{" "}
          <span
            onClick={() => {
              navigate("/signUp");
            }}
            style={{
              color: "red",
            }}
          >
            Resend
          </span>
        </p>
        <button
          className="forgotPassword_button"
          onClick={(e) => handleVerifyOtp(e)}
        >
          Verify OTP
        </button>
        <button
          className="signUp_button-mobile"
          onClick={(e) => handleVerifyOtp(e)}
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OTP;
