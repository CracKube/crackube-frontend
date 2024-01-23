import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Ck from "../Assets/CK.svg";
import Den from "../Assets/Den.svg";
import Explore from "../Assets/Explore.svg";
import Arrow from "../Assets/SideArrow.svg";
import logo from "../../src/Assets/CK_LOGO.svg";
import homeIcon from "../Assets/homeIcon.svg";
import lightIcon from "../Assets/lightIcon.svg";
import DarkIcon from "../Assets/moon.svg";
import { useTheme } from "../Context/ThemeContext";
import { fetchAsyncUsersSelf, getUser } from "../redux/Users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import PropTop from '../Assets/ProfileTop.svg'

import Logo from "./Logo";
import Profile from "./Profile/Profile";

function MenuBarSmall({ setMenu }) {
  console.log("Small MenuBar");
  const theme = useTheme();
  const [timeOfDay, setTimeOfDay] = useState("");
  const [isHovered, setHovered] = useState(false);
  const dispatch = useDispatch();

  async function getUserIP() {
    try {
      // Get user's approximate location and timezone using ipinfo.io
      const response = await axios.get("http://ip-api.com/json");
      const { lat, lon, timezone } = response.data;

      // Calculate current time in the user's timezone
      const currentTimeInUserTimezone = new Date().toLocaleTimeString("en-US", {
        timezone,
      });
      // Determine time of day
      if (
        currentTimeInUserTimezone >= "05:00:00" &&
        currentTimeInUserTimezone < "12:00:00"
      ) {
        setTimeOfDay("Morning");
      } else if (
        currentTimeInUserTimezone >= "12:00:00" &&
        currentTimeInUserTimezone < "17:00:00"
      ) {
        setTimeOfDay("Afternoon");
      } else {
        setTimeOfDay("Evening");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  useEffect(() => {
    getUserIP();
    //getUserDetails();
    dispatch(fetchAsyncUsersSelf(window.localStorage.getItem("userId")));
  }, []);

  const clickHandler = () => {
    const toggle = document.getElementById("toggle");
    const sidebar = document.getElementById("crack-logo");
    toggle.onClick = function () {
      toggle.classList.toggle("active");
      sidebar.classList.toggle("active");
    };
  };
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handleMenu = () => {
    console.log("clicked");
    setMenu(true);
  };

  const response = useSelector(getUser);
  console.log(response);

  return (
    <>
      <div className="crack-logo-s " id={theme.mode}>
        <div className="menu-header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="side-arrow" onClick={handleMenu}>
            <img src={Arrow} alt="" />
          </div>
        </div>

        <div className="menu-wrapper-s">
          <div className="menu-bar">
            <div className="menu-bar-half-1">
              <div className="cover-link-s">
                <div className="menu-bar-link-s" id={theme.mode}>
                  <NavLink
                    to={Cookies.get("state")}
                    className="menu-btn-s"
                    id={theme.mode}
                    onClick={handleClick}
                    style={({ isActive }) => ({
                      color: isActive ? "#8F00FF" : "#000",
                      background: isActive ? "#FBF5FF" : "",
                    })}
                  >
                    <img src={homeIcon} alt="" />
                  </NavLink>
                  <NavLink
                    to="/search"
                    className="menu-btn-s"
                    id={theme.mode}
                    style={({ isActive }) => ({
                      color: isActive ? "#8F00FF" : "#000",
                      background: isActive ? "#FBF5FF" : "",
                    })}
                  >
                    <img src={Explore} alt="" />
                  </NavLink>
                  <NavLink
                    to="/gpt4"
                    id={theme.mode}
                    className="menu-btn-s"
                    style={({ isActive }) => ({
                      color: isActive ? "#8F00FF" : "#000",
                      background: isActive ? "#FBF5FF" : "",
                    })}
                  >
                    <img src={Ck} alt="" />
                  </NavLink>
                  <NavLink
                    to="/"
                    className="menu-btn-s"
                    id={theme.mode}
                    style={({ isActive }) => ({
                      color: isActive ? "#8F00FF" : "#000",
                      background: isActive ? "#FBF5FF" : "",
                    })}
                  >
                    <img src={Ck} alt="" />
                  </NavLink>
                  <NavLink
                    to="/yourden"
                    className="menu-btn-s"
                    id={theme.mode}
                    style={({ isActive }) => ({
                      color: isActive ? "#8F00FF !important" : "#000",
                    })}
                  >
                    <img src={Den} alt="" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-bar-half-2-s">
            <div className="profile" onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
              <div className={`hidden-component ${isHovered ? 'visible' : ''}`}>
                <Profile details={response} time={timeOfDay} />
              </div>
              <Link to={`/profile/${window.localStorage.getItem("userId")}`}>
              <Link><img className='prof-pic-nav'  src= {PropTop} alt="" /></Link>
              </Link>

              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuBarSmall;
