import { NavLink, Link } from "react-router-dom";
import homeIcon from "../Assets/homeIcon.svg";
import Explore from "../Assets/Explore.svg";
import Ck from "../Assets/CK.svg";
import Den from "../Assets/Den.svg";
import React, { useContext } from "react";
import Logo from "./Logo";
import logoutIcon from "../Assets/Logout icon.svg";
import lightIcon from "../Assets/lightIcon.svg";
import DarkIcon from "../Assets/moon.svg";
import Profile from "./Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { ThemeContext } from "../App";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Arrow from "../Assets/SideArrow.svg";

function MenuBar({ theme, setTheme, menu, setMenu }) {
  const [response, setResponse] = useState("");


  const getUserDetails = async () => {
    const response = await axios.get(
      `https://crackube-backend-test.onrender.com/users/getUser/${window.localStorage.getItem(
        "userId"
      )}`
    );
    setResponse(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getUserDetails();
  }, []);
  const [lightBtn, setLightBtn] = useState("#000");
  const [darkBtn, setDarkBtn] = useState("#ffffff");
  const [toggle, setToggle] = useState(false);
  const { logout, isAuthenticated } = useAuth0();
  const buttonHandler =
    ("click",
    () => {
      setTheme("light");
    });

  const buttonHandlerDark =
    ("click",
    () => {
      setTheme("dark");
    });
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
    setMenu(!menu);
  }


    return (
      <div className="crack-logo">
        <div className="menu-header" onClick={handleMenu}>
          <div>
          <Logo />
          </div>
          
          <div className="side-arrow">
          <img src={Arrow} alt="" />
        </div>
        </div>
  
        <div className="menu-wrapper">
          <div className="menu-bar">
            <div className="menu-bar-half-1">
              <div className="cover-link">
                <div className="menu-bar-link">
                  <NavLink
                    to= {Cookies.get('state')}
                    className={`menu-btn ${isClicked ? "stay" : ""}`}
                    onClick={handleClick}
                  >
                    <img src={homeIcon} alt="" />
                    <p>Home</p>
                  </NavLink>
                  <NavLink to="/search" className="menu-btn" tabIndex="1">
                    <img src={Explore} alt="" />
                    <p>Explore</p>
                  </NavLink>
                  <NavLink to="/" className="menu-btn" tabIndex="1">
                    <img src={Ck} alt="" />
                    <p>CK Originals</p>
                  </NavLink>
                  <NavLink to="/" className="menu-btn" tabIndex="1">
                    <img src={Ck} alt="" />
                    <p>CK Experts</p>
                  </NavLink>
                  <NavLink to="/" className="menu-btn" tabIndex="1">
                    <img src={Den} alt="" />
                    <p>Your Den</p>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-bar-half-2">
            <div className="profile">
              <Link to="/profile">
                <Profile details={response} />
              </Link>
            </div>
            <div className="modes" id={theme}>
              <button className="light-mode" onClick={() => buttonHandler()}>
                <div>
                <img src={lightIcon} alt="" />
                </div>
                <div>
                <p>Light</p>
                </div>
                
              </button>
              <button className="dark-mode" onClick={() => buttonHandlerDark()}>
                <img src={DarkIcon} alt="" />
                <p>Dark</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
 

}

export default MenuBar;
