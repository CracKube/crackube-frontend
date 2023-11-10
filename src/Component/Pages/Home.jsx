import React from "react";

import { createContext } from "react";
import { MainBar } from "../Constants";

/******************* */

import "../../Component/NavBar/TopNavBar.css";
import { useTheme } from "../../Context/ThemeContext";
import SharedComponents from "../SharedComponents";

/******************* */
export const ThemeContext = createContext();
function Home() {
  const theme = useTheme();
  console.log(theme);
  return (
    <SharedComponents>
      <MainBar theme={theme.mode}></MainBar>
    </SharedComponents>
  );
}
export default Home;
