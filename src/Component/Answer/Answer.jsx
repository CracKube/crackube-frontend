import React, { useState } from "react";
import MenuBar from "../MenuBar";

import { MainBar, TopNavBar } from "../Constants";
import { createContext } from "react";
import { useCookies } from "react-cookie";
import HiddenComponent from "../Pages/HiddenComponent";
import AnswerMainComponent from "./AnswerMainComponent";

export const ThemeContext = createContext(null);
function Answer() {
  const [theme, setTheme] = useState("light");
  const [cookies, setCookie] = useCookies(["state"]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {/* <div className="home" id={theme}>
        <MenuBar theme={theme} setTheme={setTheme} />
        <AnswerMainComponent theme={theme} setTheme={setTheme} />
  const [theme, setTheme] = useState("light")
 const [cookies, setCookie] = useCookies(['state']);
  const [menu,setMenu] = useState(true);
  return (
    
    <ThemeContext.Provider value={{theme}}>
      <div className="home" id = {theme}>
        <MenuBar theme = {theme} setTheme = {setTheme}/>
        <AnswerMainComponent theme = {theme} setTheme = {setTheme}/>
      </div>
      <div className="bottom-nav">
        <HiddenComponent> </HiddenComponent>
      </div> */}
      <AnswerMainComponent theme={theme} setTheme={setTheme} />
    </ThemeContext.Provider>
  );
}

export default Answer;
