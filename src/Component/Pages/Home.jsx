import React, { useEffect, useState } from "react";
import MenuBar from "../MenuBar";

import { MainBar, TopNavBar } from "../Constants";
import { createContext } from "react";
import { useCookies } from "react-cookie";
import HiddenComponent from "./HiddenComponent";
import SearchBar from "../LandingPage/searchBarcomp/SearchBar";
import Arrow from "../../Assets/SideArrow.svg";
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

  if (menu) {
    return (
      <ThemeContext.Provider value={theme}>
        <div id= {theme} >
          <div className="home" id={theme}>
            <MenuBar
              theme={theme}
              setTheme={setTheme}
              menu={menu}
              setMenu={setMenu}
            />
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
  } else {
    return (
      <ThemeContext.Provider value={theme}>
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
