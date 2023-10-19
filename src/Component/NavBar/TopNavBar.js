import React from "react";
import searchicon from "../../styles/Icons/Search 1.svg";
import Noti from "../../Assets/Noti.svg";
import Settings from "../../Assets/Settings.svg";

import { useState } from "react";

import { NavLink } from "react-router-dom";
import logo from '../../Assets/CK_LOGO.svg'
import Cookies from "js-cookie";
import "./TopNavBar.css";
import Dropdown from "../DropDown/DropDown";
import UploadDropdown from "../DropDown/UploadDropDown";
import { hover } from "@testing-library/user-event/dist/hover";

export default function TopNavBar({ theme }) {
  const [hoverMe, setHoverMe] = useState(false);
  const [section, setSection] = useState("blogs");
  const [show, setShow] = useState(false);
  const buttonHandler =
    ("click",
    () => {
      setShow(!show);
    });

  const onEnterLeave = () => {};
  const setCookieBlog = () => {
    setSection("home");
    Cookies.set("state", "/home", {
      expires: 30,
    });
  };
  const setCookieAnswer = () => {
    setSection("answer");
    Cookies.set("state", "/answer", {
      expires: 30,
    });
  };
  const setCookieCode = () => {
    setSection("code");
    Cookies.set("state", "/code", {
      expires: 30,
    });
  };

  const getCookie = () => {
    alert(Cookies.get("state"));
  };
  const options = [
    { value: "option1", label: "Settings", route: "/settings" },
    { value: "option2", label: "Help" },
    { value: "option3", label: "Logout" },
  ];
  const uploadOption = [
    { value: "option1", label: "Ask a question", route: "/uploadanswer" },
    { value: "option2", label: "Write a Blog", route: "/uploadblogs" },
    { value: "option3", label: "Code", route: "/uploadcode" },
  ];
  // blur the whole page except the searchnav input
  const blur = (e) => {
    e.preventDefault();
    document.getElementById("wrapper").style.filter = "blur(10px)";
    document.getElementById("wrapper").style.background = "rgba(0, 0, 0, 0.5)";
    document.getElementById("unblur").style.display = "block";
    document.getElementById("unblur").focus();
  };
  // do not blur the input
  return (
    <>
      <div className="header" id="cool">
        <div className="mobile-logo">
        <img src={logo} alt="logo" />
        </div>
        <div className="topnavbar" id={theme}>
          {
            <div className="topmenuBar" id={theme}>
              <div onClick={setCookieAnswer} className="button-nav">
                <NavLink
                  to="/answer"
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "white",
                    background: isActive ? "white" : "black",
                  })}
                >
                  Answer
                </NavLink>
              </div>
              <div onClick={setCookieBlog} className="button-nav">
                <NavLink
                  to="/home"
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "white",
                    background: isActive ? "white" : "black",
                  })}
                >
                  Blog
                </NavLink>
              </div>
              <div onClick={setCookieCode} className="button-nav">
                <NavLink
                  to="/code"
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "white",
                    background: isActive ? "white" : "black",
                  })}
                >
                  Code
                </NavLink>
              </div>
            </div>
          }
          <button
            onClick={(e) => {
              blur(e);
            }}
            className={`searchButton`}
          >
            <a href="">
              <img src={searchicon} alt="" />
            </a>
          </button>
        </div>
        <div className="nav-btn">
          <div className="upload-nav-btn">
            <UploadDropdown options={uploadOption} />
          </div>

          <img src={Noti} className="notification-img" alt="" />
          <img src={Settings} alt="" />
          <div className="drop-flex"></div>
          <div>
            <Dropdown options={options} />
          </div>
        </div>
      </div>
    </>
  );
}
