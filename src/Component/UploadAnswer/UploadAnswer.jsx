import React, { useState } from "react";
import MenuBar from "../MenuBar";

import { MainBar, TopNavBar } from "../Constants";
import { createContext } from "react";
import { useCookies } from "react-cookie";
import HiddenComponent from "../../Component/Pages/HiddenComponent";
import UploadMainBar from "./UploadMainBar";
export const ThemeContext = createContext();

const UploadAnswer = () => {
  const [theme, setTheme] = useState("light");
  const [cookies, setCookie] = useCookies(["state"]);

  return (
    <ThemeContext.Provider value={theme}>
      <div className="home" id={theme}>
        <MenuBar theme={theme} setTheme={setTheme} />
        <div className="home-container">
          <TopNavBar theme={theme} />
          <UploadMainBar theme={theme} />
        </div>
      </div>
      <div className="bottom-nav">
        <HiddenComponent> </HiddenComponent>
      </div>
    </ThemeContext.Provider>
  );
};

export default UploadAnswer;
