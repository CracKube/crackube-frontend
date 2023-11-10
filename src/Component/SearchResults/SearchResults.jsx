import style from "./results.module.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuBar from "../MenuBar";
import { MainBar, TopNavBar } from "../Constants";
import ResultCards from "./ResultCards";
import SearchBarResults from "./SearchBarResults";
import { useLocation } from "react-router-dom";
import SharedComponents from "../SharedComponents";

function SearchResults({ theme, setTheme }) {
  const location = useLocation();
  const [clicked, setClicked] = useState(1);
  const [input, setInput] = useState(location.state.input);

  return (
    <SharedComponents>
      <SearchBarResults
        clicked={clicked}
        setClicked={setClicked}
        input={input}
        setInput={setInput}
      />
      <div className={style.resultCover}>
        <div className={style.resultbox}>
          <ResultCards value={input} clicked={clicked} />
        </div>
      </div>
    </SharedComponents>
  );
}

export default SearchResults;
