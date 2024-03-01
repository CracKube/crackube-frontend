import React, { useState } from "react";
import MenuBar from "./MenuBar";

import { TopNavBar } from "./Constants";
import { createContext } from "react";
import HiddenComponent from "./Pages/HiddenComponent";
import Arrow from "../Assets/SideArrow.svg";
import { useTheme } from "../Context/ThemeContext";
import MenuBarSmall from "./MenuBarSmall";
import logo from "../../src/Assets/CK_LOGO.svg";

export const ThemeContext = createContext();

const SharedComponents = ({ children }) => {
  const [menu, setMenu] = useState(false);
  console.log(menu);
  const theme = useTheme();

  const handleMenu = (e) => {
    e.preventDefault();
    console.log("clicked");
    if (menu === true) {
      setMenu(false);
      localStorage.setItem("menu", "false");
    } else {
      setMenu(true);
      localStorage.setItem("menu", "true");
    }
    setMenu(!menu);
  };

  return (
    <ThemeContext.Provider value={theme.mode}>
      <div className="whole-page" id={theme.mode}>
        <div className="home-top">
          {localStorage.getItem("menu") === "true" ? (
            <>
              <div className="menu-header">
                <div className="logo-s">
                  <img src={logo} alt="logo" />
                  <h1>CracKube</h1>
                </div>

                <div className="side-arrow" onClick={handleMenu}>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </>
          ) : (
            <>
            <div className="menu-header-s">
                <div className="logo-s">
                  <img src={logo} alt="logo" />
                </div>

                <div className="side-arrow" onClick={handleMenu}>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </>
          )}

          <TopNavBar theme={theme.mode} />
        </div>
        <div className="home" id={theme.mode}>
          <MenuBar menu={menu} />
          <div className="center-maker">
            <div className="home-container">{children}</div>
          </div>
        </div>
      </div>
      <div className="bottom-nav">
        <HiddenComponent> </HiddenComponent>
      </div>
    </ThemeContext.Provider>
  );
};

export default SharedComponents;
