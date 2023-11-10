import React, { useState } from "react";
import MenuBar from "../MenuBar";

import { MainBar, TopNavBar } from "../Constants";
import { createContext } from "react";
import { useCookies } from "react-cookie";
import HiddenComponent from "../Pages/HiddenComponent";
import AnswerMainComponent from "./AnswerMainComponent";
import SharedComponents from "../SharedComponents";
import { useTheme } from "../../Context/ThemeContext";

export const ThemeContext = createContext(null);
function Answer() {
  const theme = useTheme();
  const [cookies, setCookie] = useCookies(["state"]);

  return (
    <SharedComponents>
        <AnswerMainComponent theme={theme.mode} />
    </SharedComponents>
  );
}

export default Answer;
