import React, { useState } from "react";
import MenuBar from "../Component/MenuBar";

import { createContext } from "react";
import { useCookies } from "react-cookie";
import HiddenComponent from "../Component/Pages/HiddenComponent";
import CodeMainComponent from "./CodeMainComponent";
import SharedComponents from "../Component/SharedComponents";
export const ThemeContext = createContext(null);
function Code() {
  const [theme, setTheme] = useState("light");
  return (
    <SharedComponents>
        <CodeMainComponent theme = {theme} setTheme = {setTheme}/>
    </SharedComponents>
  );
}

export default Code;
