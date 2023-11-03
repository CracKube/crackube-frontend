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
  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    setUserId(window.localStorage.getItem("userId"));
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <div id={theme}>
        <div className={menu ? "home" : "home-full"} id={theme}>
          <MenuBar
            theme={theme}
            setTheme={setTheme}
            menu={menu}
            setMenu={setMenu}
          />
          {menu === false && (
            <div className="">
              <div className="side-arrow" onClick={setMenu(!menu)}>
                <img src={Arrow} alt="" />
              </div>
            </div>
          )}
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
export default Home;
