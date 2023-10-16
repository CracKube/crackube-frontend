import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// components

// Assets
import ck_logo from "../../Assets/CK_LOGO.png";

//css
import "../../styles/Sheets/thirdPage.css";

const ThirdPage = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState("");
  const {state} = useLocation();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const [Date, setDate] = useState("");

  const [emailError, setEmailError] = useState("");

  const handleGender = (e) => {
    const value = e.target.value;
    setGender(value); // Allow user to enter value
  };
  const datePick = (e) => {
    setDate(e.target.value);
  };
  const handleNavigate = () => {
    navigate("/fourth", {state: { date: Date, gender: gender, country: selectedCountry, userId: state.userId },
    });
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
                value={gender}
                onChange={handleGender}
                required
              />{" "}
              Male
              <input
                type="radio"
                placeholder="Enter your email"
                className="radio_button"
                name="gender"
                value={gender}
                onChange={handleGender}
                required
              />{" "}
              Female
              <input
                type="radio"
                placeholder="Enter your email"
                className="radio_button"
                name="gender"
                value={gender}
                onChange={handleGender}
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
              value={Date}
              placeholder="Enter your email"
              className="signUpForm_input"
              onChange={datePick}
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

        <button className="forgotPassword_button" onClick={handleNavigate}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ThirdPage;
