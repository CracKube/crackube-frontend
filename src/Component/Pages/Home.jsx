import React, { useEffect, useState } from "react";
import MenuBar from "../MenuBar";

import { MainBar, TopNavBar } from "../Constants";
import { createContext } from "react";
import { useCookies } from "react-cookie";
import HiddenComponent from "./HiddenComponent";
import SearchBar from "../LandingPage/searchBarcomp/SearchBar";
import Arrow from "../../Assets/SideArrow.svg";

/******************* */
import searchicon from "../../styles/Icons/Search 1.svg";
import Noti from "../../Assets/Noti.svg";
import Settings from "../../Assets/Settings.svg";

import { NavLink } from "react-router-dom";
import logo from "../../Assets/CK_LOGO.svg";
import Cookies from "js-cookie";
import "../../Component/NavBar/TopNavBar.css";
import Dropdown from "../DropDown/DropDown";
import UploadDropdown from "../DropDown/UploadDropDown";
import { hover } from "@testing-library/user-event/dist/hover";
import Answer from "../Answer/Answer";
import Code from "../../Code/Code";

/******************* */
export const ThemeContext = createContext();
function Home() {
  const [userId, setUserId] = useState(null);
  const [menu, setMenu] = useState(true);
  const [theme, setTheme] = useState("light");
  const [cookies, setCookie] = useCookies(["state"]);
  const [blur, setBlur] = useState(false);
  const handleSearchBar = () => {
    document.getElementById("wrapper").style.filter = "blur(0px)";
    document.getElementById("unblur").style.display = "none";
    document.getElementById("unblur").style.position = "absolute";
  };
  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    document.getElementById("unblur").style.display = "none";
    setUserId(window.localStorage.getItem("userId"));
  }, []);

  /**************** */
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
    showBlogSection();
    setSection("home");
    Cookies.set("state", "/home", {
      expires: 30,
    });
  };
  const setCookieAnswer = () => {
    setSection("answer");
    showAnswerSection();
    Cookies.set("state", "/answer", {
      expires: 30,
    });
  };
  const setCookieCode = () => {
    showCodeSection();
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
  const topBarBlur = (e) => {
    e.preventDefault();
    document.getElementById("wrapper").style.filter = "blur(10px)";
    document.getElementById("wrapper").style.background = "rgba(0, 0, 0, 0.5)";
    document.getElementById("unblur").style.display = "block";
    document.getElementById("unblur").focus();
  };
  /********************/

  const [currentSection, setCurrentSection] = useState("blog"); // Default to 'answer'

  // Define functions to change the current section
  const showAnswerSection = () => setCurrentSection("answer");
  const showBlogSection = () => setCurrentSection("blog");
  const showCodeSection = () => setCurrentSection("code");

  if (menu) {
    return (
      <ThemeContext.Provider value={theme}>
        <div id="unblur" onBlur={handleSearchBar}>
          <div className="list-wrap">
            <SearchBar prop="pull" />
          </div>
        </div>
        <div id={theme}>
          <div className="home" id={theme}>
            <MenuBar
              theme={theme}
              setTheme={setTheme}
              menu={menu}
              setMenu={setMenu}
            />
            <div className="center-maker">
              <div className="home-container">
                <div className="header" id="cool">
                  <div className="mobile-logo">
                    <img src={logo} alt="logo" />
                  </div>
                  <div className="topnavbar" id={theme}>
                    {
                      <div className="topmenuBar" id={theme}>
                        <div onClick={setCookieAnswer} className="button-nav">
                          <a>Answer</a>
                        </div>
                        <div onClick={setCookieBlog} className="button-nav">
                          <a>Blog</a>
                        </div>
                        <div onClick={setCookieCode} className="button-nav">
                          <a>Code</a>
                        </div>
                      </div>
                    }
                    <button
                      onClick={(e) => {
                        topBarBlur(e);
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
                {currentSection === "answer" && <Answer />}
                {currentSection === "blog" && <MainBar />}
                {currentSection === "code" && <Code />}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-nav">
          <HiddenComponent> </HiddenComponent>
        </div>
      </ThemeContext.Provider>
    );
  } else {
    return (
      <ThemeContext.Provider value={theme}>
        <div id="unblur" onBlur={handleSearchBar}>
          <div className="list-wrap">
            <SearchBar prop="pull" />
          </div>
        </div>
        <div id="arrow-no" onClick={handleMenu}>
          <div className="side-arrow-no">
            <img src={Arrow} alt="" />
          </div>
        </div>

        <div id="wrapper">
          <div className="home-no" id={theme}>
            <div className="center-maker">
              <div className="home-container">
                <TopNavBar theme={theme} />
                <MainBar theme={theme} />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-nav">
          <HiddenComponent> </HiddenComponent>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default Home;
