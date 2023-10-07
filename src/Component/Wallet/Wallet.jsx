import React, { useEffect, useState } from "react";
import MenuBar from "../MenuBar";

import { MainBar, TopNavBar } from "../Constants";
import { createContext } from "react";
import { useCookies } from "react-cookie";
import HiddenComponent from "../../Component/Pages/HiddenComponent";
import SearchBar from "../LandingPage/searchBarcomp/SearchBar";
import WalletComponent from "./WalletComponent";

export const ThemeContext = createContext();

const Wallet = () => {
  const [theme, setTheme] = useState("light");
  const handleSearchBar = () => {
    document.getElementById("wrapper").style.filter = "blur(0px)";
    document.getElementById("unblur").style.display = "none";
    document.getElementById("unblur").style.position = "absolute";
  };
  const [response, setResponse] = useState("");
  const getUserDetails = async () => {
    const response = await fetch(
      `https://crackube-backend-test.onrender.com/users/getUser/${window.localStorage.getItem(
        "userId"
      )}`
    );
    let data = await response.json();
    setResponse(data);
    console.log(data);
    
  };

  useEffect(() => {
    console.log(response);
    getUserDetails();
    document.getElementById("unblur").style.display = "none";
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <div id="unblur" onBlur={handleSearchBar}>
        <div className="list-wrap">
          <SearchBar prop="pull" />
        </div>
      </div>

      <div id="wrapper">
        <div className="home" id={theme}>
          <MenuBar theme={theme} setTheme={setTheme} />
          <div className="center-maker">
            <div className="home-container">
              <TopNavBar theme={theme} />
              <WalletComponent response = {response} />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-nav">
        <HiddenComponent> </HiddenComponent>
      </div>
    </ThemeContext.Provider>
  );
};

export default Wallet;
