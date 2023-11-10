import React, { useEffect, useState } from "react";
import MenuBar from "../MenuBar";

import { MainBar, TopNavBar } from "../Constants";
import { createContext } from "react";
import { useCookies } from "react-cookie";
import HiddenComponent from "../Pages/HiddenComponent";
import Arrow from "../../Assets/SideArrow.svg";
import DenComponent from "./DenComponent";
import SharedComponents from "../SharedComponents";
export const ThemeContext = createContext();

const YourDen = () => {
  return (
    <SharedComponents>
      <DenComponent />
    </SharedComponents>
  );
};

export default YourDen;
