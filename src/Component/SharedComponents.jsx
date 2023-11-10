
import React, {useState } from "react";
import MenuBar from "./MenuBar";

import { TopNavBar } from "./Constants";
import { createContext } from "react";
import HiddenComponent from "./Pages/HiddenComponent";
import Arrow from "../Assets/SideArrow.svg";

export const ThemeContext = createContext();

const SharedComponents = ({children}) => {
    const [menu, setMenu] = useState(true);
  const [theme, setTheme] = useState("light");
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
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-nav">
        <HiddenComponent> </HiddenComponent>
      </div>
    </ThemeContext.Provider>
  )
}

export default SharedComponents