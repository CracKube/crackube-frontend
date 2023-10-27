import React from "react";
import MajorComponent from "../MajorComponent";
import "./Store.css";
import { TopNavBar } from "../Constants";
import { useState } from "react";
import { createContext } from "react";
import MenuBar from "../MenuBar";
import Arrow from "../../Assets/SideArrow.svg";
import HiddenComponent from "../Pages/HiddenComponent";
import Store from "./Store";
export const ThemeContext = createContext(null)

const StoreComponent = () => {
  const [theme, setTheme] = useState("light")
    const [menu, setMenu] = useState(true);
  return (
    <div className="page-cover">
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
                <Store />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-nav">
          <HiddenComponent> </HiddenComponent>
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default StoreComponent;
