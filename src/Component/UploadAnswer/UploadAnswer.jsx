import React, { useState } from "react";
import MenuBar from "../MenuBar";

import { MainBar, TopNavBar } from "../Constants";
import { createContext } from "react";
import { useCookies } from "react-cookie";
import HiddenComponent from "../../Component/Pages/HiddenComponent";
import UploadMainBar from "./UploadMainBar";
import SharedComponents from "../SharedComponents";
export const ThemeContext = createContext();

const UploadAnswer = () => {
  const [theme, setTheme] = useState("light");
  const [cookies, setCookie] = useCookies(["state"]);

  return (
    <SharedComponents>
          <UploadMainBar  />
    </SharedComponents>
  );
};

export default UploadAnswer;
