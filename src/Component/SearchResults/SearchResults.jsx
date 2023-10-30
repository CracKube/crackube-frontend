import style from "./results.module.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuBar from "../MenuBar";
import { MainBar, TopNavBar } from "../Constants";
import ResultCards from "./ResultCards";
import SearchBarResults from "./SearchBarResults";
function SearchResults({ theme, setTheme }) {
  
  const [press, setPress] = useState("Blog");

  const [input, setInput] = useState("");

  return (
    <div className="home" id={theme}>
      <MenuBar theme={theme} setTheme={setTheme} />
      <div className="home-container">
        <TopNavBar theme={theme} />
        <SearchBarResults press={press} setInput = {setInput}  setPress={setPress} />
        <div className={style.resultCover}>
          <div className={style.resultbox}>
            <ResultCards
              value = {input}
              press={press}
              title="What is Dropshipping for Beginners? How to Make Money Online in 2021"
              content="What is Dropshipping for Beginners? How to Make Money Online in 2021 What is Dropshipping for Beginners? How to Make Money Online in 2021 What is Drop...."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
