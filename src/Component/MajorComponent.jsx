import React from "react";
import { TopNavBar } from "./Constants";
import { useState } from "react";
import { createContext } from "react";
import Arrow from "../Assets/SideArrow.svg";
import MenuBar from "./MenuBar";
import HiddenComponent from "../Component/Pages/HiddenComponent";
export const ThemeContext = createContext();

const MajorComponent = () => {
  const [menu, setMenu] = useState(true);
  const [theme, setTheme] = useState("light");
  return (
    <div>
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

export default MajorComponent;
