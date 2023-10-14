// import React, { useState } from "react";
// import "../../styles/Sheets/Style.css";
// import LoginDesign from "../../Assets/SignUpImg.svg";
// import { NavLink, useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
// import OTP from "../../Component/OTP Page/OTP.js";
// import { useAuth0 } from "@auth0/auth0-react";
// import axios from "axios";
// import { LoginSocialFacebook } from "reactjs-social-login";
// import { useNavigate } from "react-router-dom";

// const ThirdPage = () => {
//   const navigate = useNavigate();
//   const {state} = useLocation();
//     const [Date, setDate] = useState("");
//   const [Gender, setGender] = useState("");
//   const datePick = (e) => {
//     setDate(e.target.value);
//   };

//   // get the selected option in id= gender
//   const handleGender = (e) => {
//     setGender(e.target.value);
//   }
//   const handleNavigate = () => {
//     navigate("/fourth", {state: {date: Date, gender: Gender, userId: state.userId}});
//   };

//   return (
//     <div className="main1">
//       <div className="Design">
//         <img className="img" src={LoginDesign} alt="" />
//       </div>
//       <div className="Welcome">
//         <p className="txt">Tell us more about you</p>
//         <form action="">
//           <p className="Emtxt">Mention your gender</p>
//           <select id="gender" onChange={handleGender}>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//         </form>
//         <form action="">
//           <p className="Patxt">Your Date of birth*</p>
//           <input
//             placeholder="Enter your DOB"
//             type="date"
//             onChange={datePick}
//           />
//         </form>
//         <button onClick={handleNavigate}>Next Page</button>
//       </div>

//     </div>
//   );
// };

// export default ThirdPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// components

// Assets
import ck_logo from "../../Assets/CK_LOGO.png";
import signUp_image from "../../Assets/SignUpImage.png";

//css
import "../../styles/Sheets/thirdPage.css";

const ThirdPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value); // Allow user to enter value
    if (value && !validateEmail(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const [selectedCountry, setSelectedCountry] = useState("");

  // Define a function to handle the change event of the dropdown
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const countryOptions = [
    { value: "india", label: "India" },
    { value: "usa", label: "United States" },
    { value: "canada", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
  ];

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
      <div className="third_form-container">
        <div className="signUp_logo-container">
          <img src={ck_logo} alt="logo" className="signUp_logo" />
          <span className="signUpLogo_text">CracKube</span>
        </div>
        <span className="signUp_title">Tell us more about you...</span>
        <p className="signUp_para">
          {/* Enter your email to reset password. OTP will <br />
          be sent to your account. */}
        </p>
        <div className="signUpForm">
          <div className="">
            <label className="third_label">Whats your Gender</label>
            <div className="radio_container">
              <input
                type="radio"
                placeholder="Enter your email"
                className="radio_button"
                name="gender"
                value={email}
                onChange={handleEmailChange}
                required
              />{" "}
              Male
              <input
                type="radio"
                placeholder="Enter your email"
                className="radio_button"
                name="gender"
                value={email}
                onChange={handleEmailChange}
                required
              />{" "}
              Female
              <input
                type="radio"
                placeholder="Enter your email"
                className="radio_button"
                name="gender"
                value={email}
                onChange={handleEmailChange}
                required
              />{" "}
              Other
            </div>
          </div>
          <div className="">
            <label className="third_label">Date of Birth</label>
            <br />
            <br />
            <input
              type="date"
              placeholder="Enter your email"
              className="signUpForm_input"
              required
            />
          </div>
          <div className="">
            <label className="third_label">Your Country</label>
            <br />
            <br />
            <select
              value={selectedCountry}
              onChange={handleCountryChange}
              className="signUpForm_input"
              required
            >
              <option value="" disabled>
                Select Your Country
              </option>
              {countryOptions.map((ele, index) => (
                <option value={ele.value}>{ele.label}</option>
              ))}
            </select>
          </div>
        </div>

        <button className="forgotPassword_button">Next</button>
        <button className="forgotPassword_button-mobile">Next</button>
      </div>
    </div>
  );
};

export default ThirdPage;
