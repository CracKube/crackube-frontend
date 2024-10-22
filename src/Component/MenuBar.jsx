import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Ck from "../Assets/CK.svg";
import Den from "../Assets/Den.svg";
import Explore from "../Assets/Explore.svg";
import Arrow from "../Assets/SideArrow.svg";
import homeIcon from "../Assets/homeIcon.svg";
import lightIcon from "../Assets/lightIcon.svg";
import DarkIcon from "../Assets/moon.svg";
import { useTheme } from "../Context/ThemeContext";
import { fetchAsyncUsersSelf, getUser } from "../redux/Users/userSlice";
import { useDispatch, useSelector } from "react-redux";

import Logo from "./Logo";
import Profile from "./Profile/Profile";
import MenuBarSmall from "./MenuBarSmall";

function MenuBar({menu}) {
  const theme = useTheme();
  const [menuBar, setMenuBar] = useState(localStorage.getItem("menu"));
  
  console.log(menuBar);
  const [timeOfDay, setTimeOfDay] = useState("");
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




  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const response = useSelector(getUser);
  console.log(response);

  return (
    
    <>
    {localStorage.getItem("menu") === "true" ? 
    <>
    <div className="crack-logo" id={theme.mode}>
      <div className="menu-wrapper">
        <div className="menu-bar">
          <div className="menu-bar-half-1">
            <div className="cover-link">
              <div className="menu-bar-link" id={theme.mode}>
                <NavLink
                  to={Cookies.get("state")}
                  className="menu-btn"
                  id={theme.mode}
                  onClick={handleClick}
                  style={({ isActive }) => ({
                    color: isActive ? "#8F00FF" : "#000",
                    background: isActive ? "#FBF5FF" : "",
                  })}
                >
                  <img src={homeIcon} alt="" />
                  <p>Home</p>
                </NavLink>
                <NavLink
                  to="/search"
                  className="menu-btn"
                  id={theme.mode}
                  style={({ isActive }) => ({
                    color: isActive ? "#8F00FF" : "#000",
                    background: isActive ? "#FBF5FF" : "",
                  })}
                >
                  <img src={Explore} alt="" />
                  <p>Explore</p>
                </NavLink>
                <NavLink
                  to="/gpt4"
                  id={theme.mode}
                  className="menu-btn"
                  style={({ isActive }) => ({
                    color: isActive ? "#8F00FF" : "#000",
                    background: isActive ? "#FBF5FF" : "",
                  })}
                >
                  <img src={Ck} alt="" />
                  <p>CracKube AI</p>
                </NavLink>
                <NavLink
                  to="/"
                  className="menu-btn"
                  id={theme.mode}
                  style={({ isActive }) => ({
                    color: isActive ? "#8F00FF" : "#000",
                    background: isActive ? "#FBF5FF" : "",
                  })}
                >
                  <img src={Ck} alt="" />
                  <p>CK Experts</p>
                </NavLink>
                <NavLink
                  to="/yourden"
                  className="menu-btn"
                  id={theme.mode}
                  style={({ isActive }) => ({
                    color: isActive ? "#8F00FF !important" : "#000",
                  })}
                >
                  <img src={Den} alt="" />
                  <p>Your Den</p>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="menu-bar-half-2">
          <div className="profile">
            <Link to = {`/profile/${window.localStorage.getItem("userId")}`} >
              {
                <Profile details={response} time={timeOfDay} />
              }
              
            </Link>
          </div>
          <div className="modes" id={theme.mode}>
            <button className="light-mode" onClick={theme.toggleLight}>
                <img src={lightIcon} alt="" />
                <p>Light</p>
            </button>
            <button className="dark-mode" onClick={theme.toggleDark}>
              <img src={DarkIcon} alt="" />
              <p>Dark</p>
            </button>
            
          </div>
        </div>
        </div>

        
      </div>
    </div>
    </> 
    : 
    <>
    <MenuBarSmall/>
    </>
    }   
    
    </>
  );
}

export default MenuBar;
