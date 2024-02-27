import Cookies from "js-cookie";
import React, { useState } from "react";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/CK_LOGO.svg";
import Noti from "../../Assets/Noti.svg";
import Settings from "../../Assets/Settings.svg";
import { useTheme } from "../../Context/ThemeContext";
import searchicon from "../../styles/Icons/Search 1.svg";
import Dropdown from "../DropDown/DropDown";
import UploadDropdown from "../DropDown/UploadDropDown";
import SearchBar from "./SearchPart";
import "./TopNavBar.css";
export default function TopNavBar() {
  const theme = useTheme();
  const [section, setSection] = useState("blogs");
  const [isModalOpen, setIsModalOpen] = useState(false);

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


  const options  = [
    { value: "option1", label: "Settings", route: "/settings" },
    { value: "option2", label: "Help" },
    { value: "option3", label: "Logout" },
    {
      value: "option4",
      label: "Refund Policy",
      route: "/refundandcancellation",
    },
    { value: "option5", label: "© Crackube" },
  ];
  const uploadOption = [
    { value: "option1", label: "Ask a question", route: "/uploadanswer" },
    { value: "option2", label: "Write a Blog", route: "/uploadblogs" },
    { value: "option3", label: "Code", route: "/uploadcode" },
  ];
  // blur the whole page except the searchnav input

  const CustomModal = ({ isOpen, onRequestClose, children }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="modal-search"
        overlayClassName="modal-overlay"
      >
        {children}
      </Modal>
    );
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    console.log("open");
    setIsModalOpen(true);
  };

  // do not blur the input
  return (
    <>
      <div className="header" id="cool">
        <CustomModal isOpen={isModalOpen} onRequestClose={closeModal}>
          <SearchBar prop="pull" />
        </CustomModal>
        <div className="mobile-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="topnavbar" id={theme.mode}>
          {
            <div className="topmenuBar" id={theme.mode}>
              <div onClick={setCookieAnswer} className="button-nav">
                <NavLink
                  to="/answer"
                  // style={({ isActive }) => ({
                  //   color: isActive ? "black" : "white",
                  //   background: isActive ? "white" : "black",
                  // })}
                >
                  Answer
                </NavLink>
              </div>
              <div onClick={setCookieBlog} className="button-nav">
                <NavLink
                  to="/home"
                  // style={({ isActive }) => ({
                  //   color: isActive ? "black" : "white",
                  //   background: isActive ? "white" : "black",
                  // })}
                >
                  Blog
                </NavLink>
              </div>
              <div onClick={setCookieCode} className="button-nav">
                <NavLink
                  to="/code"
                  // style={({ isActive }) => ({
                  //   color: isActive ? "black" : "white",
                  //   background: isActive ? "white" : "black",
                  // })}
                >
                  Code
                </NavLink>
              </div>
            </div>
          }
          <button onClick={openModal} className={`searchButton`}>
            <img src={searchicon} alt="" />
          </button>
        </div>
        <div className="nav-btn">
          <div className="upload-nav-btn">
            <UploadDropdown options={uploadOption} />
          </div>

          <img src={Noti} className="notification-img" alt="" />
          <img src={Settings} alt="" />
          <div className="drop-flex"></div>
          <div className="drop-nav">
            <Dropdown options={options} />
          </div>
        </div>
      </div>
    </>
  );
}
