import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import MyDetails from "./MyDetails";
import Email from "./Email";
import Password from "./Password";
import DeleteAccount from "./DeleteAccount";
const SettingsBar = ({ clicked }) => {
  const [user, setUser] = useState([]);
  const getUserDetails = async () => {
    const response = await axios.get(
      `https://crackube-backend-test.onrender.com/users/getUser/${window.localStorage.getItem(
        "userId"
      )}`
    );
    // console.log(response.data);
    setUser(response.data);
  };
  useEffect(() => {
    getUserDetails();
  }, []);
  console.log(clicked);
  return (
    <>
      {clicked == 0 && (
        <MyDetails user = {user} />
      )}
      {clicked == 1 && (
        <Email user = {user}/>
      )}
      {clicked == 2 && (
        <Password user = {user} />
        )}
        {clicked == 6 && (
          <DeleteAccount user = {user} />
        )}
    </>
  );
};

export default SettingsBar;
