import React, { useState } from "react";
import "../../styles/Sheets/Style.css";
import LoginDesign from "../../Assets/SignUpImg.svg";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import OTP from "../../Component/OTP Page/OTP.js";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { LoginSocialFacebook } from "reactjs-social-login";
import { useNavigate } from "react-router-dom";

const ThirdPage = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
    const [Date, setDate] = useState("");
  const [Gender, setGender] = useState("");
  const datePick = (e) => {
    setDate(e.target.value);
  };

  // get the selected option in id= gender
  const handleGender = (e) => {
    setGender(e.target.value);
  }
  const handleNavigate = () => {
    navigate("/fourth", {state: {date: Date, gender: Gender, userId: state.userId}});
  };


  return (
    <div className="main1">
      <div className="Design">
        <img className="img" src={LoginDesign} alt="" />
      </div>
      <div className="Welcome">
        <p className="txt">Tell us more about you</p>
        <form action="">
          <p className="Emtxt">Mention your gender</p>
          <select id="gender" onChange={handleGender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </form>
        <form action="">
          <p className="Patxt">Your Date of birth*</p>
          <input
            placeholder="Enter your DOB"
            type="date"
            onChange={datePick}
          />
        </form>
        <button onClick={handleNavigate}>Next Page</button>
      </div>
      
    </div>
  );
};

export default ThirdPage;
