// import React, { useEffect, useState } from "react";
// import "./SignUp.css";
// import signupimage from "../../Assets/SignUpImg.svg";
// import Logo from "../Logo";
// import apple from "../../Assets/Apple.svg";
// import facebook from "../../Assets/Facebook.svg";
// import twitter from "../../Assets/Twitter.svg";
// import google from "../../Assets/Google.svg";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// const SignUp = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [userId , setUserId] = useState("");

//   const handleSignUP = async (e) => {
//     // https://crackube-backend-test.onrender.com/users/createUser
//     // http://localhost:5000/users/createUser
//     //url encoded
//     e.preventDefault();
//     const response = await fetch(
//       "https://crackube-backend-test.onrender.com/auth/createUser",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: `email=${email}&password=${password}&firstName=${username}&lastName=${username
//         }`
//       }
//     );

//     const data = await response.json();
//     console.log(data)
//     setUserId(data._id);
//     console.log(userId)
//     console.log(email);
//     if (data.message === "User already exists") {
//       window.alert("User already exists");
//     } else {
//       window.alert("User created successfully");
//       localStorage.setItem("token", data.token);
//       navigate('/otp', {state : {email: `${email}`, userId : `${data.result._id}`}})
//     }

//   };

//   const handleGoogleLogin = async () =>{
//     window.location.href = 'https://crackube-backend-test.onrender.com/auth/google'
//   }
//   const handleMicrosoftLogin = async () =>{
//     window.location.href = 'https://crackube-backend-test.onrender.com/auth/microsoft'
//   }

//   return (
//     <div className="container">
//       <div className="left-container">
//         <img src={signupimage} alt="image" className="left-image" />
//       </div>
//       <div className="right-container">
//         <div className="signup-logo">
//           <Logo />
//         </div>
//         <div className="signup-content">
//           <div className="signup-content-top">
//             <p className="text-account">Create your account</p>
//             <p className="text-para">
//               Let’s get started with your new journey with CracKube
//             </p>
//           </div>
//           <div className="signup-icons">
//             <div className="apple-oauth-wrapper icon-container">
//               <img src={apple} alt="apple" />
//             </div>
//             <div className="facebook-oauth-wrapper icon-container">
//               <img src={facebook} alt="facebook" />
//             </div>
//             <div className="twitter-oauth-wrapper icon-container">
//               <img src={twitter} alt="twitter" />
//             </div>
//             <div className="google-oauth-wrapper icon-container" onClick={() => handleGoogleLogin()}>
//               <img src={google} alt="google" />
//             </div>
//           </div>
//           <p className="text-or">or</p>
//           <form className="signup-form" >
//             <div className="form-group">
//               <label htmlFor="username">Fullname</label>
//               <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 placeholder="Enter your full name"
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 placeholder="Enter your name"
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 placeholder="Enter your password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="confirmpassword">Confirm Password</label>
//               <input
//                 type="password"
//                 id="confirmpassword"
//                 value={confirmPassword}
//                 placeholder="Confirm your password"
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <p>
//               By Signing Up, you agree to{" "}
//               <span className="span">terms of use</span> and{" "}
//               <span className="span">privacy statements.</span>
//             </p>
//             <button type="submit" className="signup-button" onClick={(e) => handleSignUP(e)}>
//               Sign Up
//             </button>
//             <p>
//               Already have an account?<span className="span-login">Log In</span>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

/******************************** Divy ****************************/

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// components

// Assets
import ck_logo from "../../Assets/CK_LOGO.png";
import signUp_image from "../../Assets/SignUpImage.png";
import apple from "../../Assets/Apple.svg";
import facebook from "../../Assets/Facebook.svg";
import twitter from "../../Assets/Twitter.svg";
import google from "../../Assets/Google.svg";

import axios from "axios";


//css
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState(false);
  const handleGoogleLogin = async () => {
    window.location.href =
      "https://crackube-backend-test.onrender.com/auth/google";
  };
  const handleMicrosoftLogin = async () => {
    window.location.href =
      "https://crackube-backend-test.onrender.com/auth/microsoft";
  };

  // modified by Divy 
  // const handleLogin = async () => {
  //   try {
  //     // Make the login request
  //     const response = await fetch("https://crackube-backend-test.onrender.com/users/signIn", {
  //       method: "POST",
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       body: `email=${email}&password=${password}`
  //     });

  //     // Check if the response is okay (status code 200-299)
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     // Parse the response data
  //     const data = await response.json();

  //     // Check if the login was successful
  //     if (data.token) {
  //       localStorage.setItem("token", data.token);
  //       console.log(data);
  //       setLoginStatus(true);
  //       window.alert("check jwt");
  //       navigate("/answer");  // Using react-router's navigate function instead of window.location
  //     } else {
  //       alert(data.message || "Invalid Credentials");
  //     }
  //   } catch (error) {
  //     console.error("Error during login:", error);
  //     alert("An error occurred. Please try again.");
  //   }
  // };



  const handleLogin = async () => {
    //https://crackube-backend-test.onrender.com/users/signIn
    //url encoded

    const response = await fetch("https://crackube-backend-test.onrender.com/users/signIn", {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `email=${email}&password=${password}`
    }).then(() => {
      if (!response.data.message) {
        setLoginStatus(false)
      } else {
        localStorage.setItem("token", response.data.token);
        console.log(response.data);
        setLoginStatus(true)
      }
    })


    const authRes = await axios.get("https://crackube-backend-test.onrender.com/users/signIn", {
      headers: {
        "x-access-token": localStorage.getItem("token")
      },
    }).then((response) => {
      console.log(authRes);
    })


    const data = await authRes.json();
    if (data.message === "Successfully logged in...") {
      window.alert("check jwt")
      window.location.href = "/answer";
    }
    else {
      alert("Invalid Credentials");
    }
  }


  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value); // Allow user to enter value
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value); // Allow user to enter value
  };

  return (
    <div className="signup_container">
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
      <div className="signUp_form-container">
        <div className="signUp_logo-container">
          <img src={ck_logo} alt="logo" className="signUp_logo" />
          <span className="signUpLogo_text">CracKube</span>
        </div>
        <span className="signUp_title">Welcome back home</span>
        <p className="signUp_para">
          Let's get started with your new journey with <br />
          CracKube
        </p>
        <div className="signUpForm">

          <div className="">
            <label className="signUpForm_label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="signUpForm_input"
              value={email}
              onChange={handleEmailChange}
              required
            />

          </div>

          <div className="">
            <label className="signUpForm_label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="signUpForm_input"
              value={password}
              onChange={handlePasswordChange}
              required
            />

          </div>


        </div>
        <p className="login_para2">
          <span><input type="checkbox" /> Remember me for 30 days</span>
          <span style={{
            color: 'red'
          }}
            onClick={() => navigate('/forgetpassword')}
          >Forgot Password</span>
        </p>

        <p className="login_para2-mobile">
          <span><input type="checkbox" /> Remember me for 30 days</span>
          <span style={{
            color: 'red'
          }}
            onClick={() => navigate('/forgetpassword')}
          >Forgot Password</span>
        </p>

        <button className="signUp_button" onClick={handleLogin}>
          Login
        </button>
        <button className="signUp_button-mobile">Agree and Continue</button>

        <p className="signUp_para2 mobile">
          Don't have an account ?{" "}
          <span
            className="login_link"
            onClick={() => {
              navigate("/signUp");
            }}
          >
            Signup
          </span>
        </p>
        <p className="signUp_para2 mobile">or</p>

        <div className="signUp_socials">
          <div className="signUp_social-container signUp_apple">
            <img src={apple} alt="apple" className="signUp_social-logo" />
          </div>
          <div className="signUp_social-container signUp_facebook">
            <img src={facebook} alt="facebook" className="signUp_social-logo" />
          </div>
          <div className="signUp_social-container signUp_twitter">
            <img src={twitter} alt="twitter" className="signUp_social-logo" />
          </div>
          <div
            className="signUp_social-container signUp_google"
            onClick={() => handleGoogleLogin()}
          >
            <img src={google} alt="google" className="signUp_social-logo" />
          </div>
        </div>
      </div>
    </div >
  );
};

export default SignIn;
