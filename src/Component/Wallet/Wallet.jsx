import React, { useEffect, useState } from "react";
import MenuBar from "../MenuBar";

import { MainBar, TopNavBar } from "../Constants";
import { createContext } from "react";
import { useCookies } from "react-cookie";
import HiddenComponent from "../../Component/Pages/HiddenComponent";
import SearchBar from "../LandingPage/searchBarcomp/SearchBar";
import WalletComponent from "./WalletComponent";
import SharedComponents from "../SharedComponents";

export const ThemeContext = createContext();

const Wallet = () => {
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
  }, []);

  return (
      <SharedComponents>
          <WalletComponent response={response} />
      </SharedComponents>
  );
};

export default Wallet;
