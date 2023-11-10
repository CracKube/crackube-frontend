import React from "react";
import Search from "../../Assets/search.svg";
import { Link, useParams } from "react-router-dom";
import MenuBar from "../MenuBar";
import { MainBar, TopNavBar } from "../Constants";
import HiddenComponent from "../Pages/HiddenComponent";
import AnsweringPage from "./AnsweringPage";
import SharedComponents from "../SharedComponents";
function MainAnswer() {
  return (
    <SharedComponents>
          <AnsweringPage />
    </SharedComponents>
  );
}

export default MainAnswer;
