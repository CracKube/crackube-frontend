import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Arrow from "../../Assets/SideArrow.svg";
import lightIcon from "../../Assets/lightIcon.svg";
import DarkIcon from "../../Assets/moon.svg";
import { useTheme } from "../../Context/ThemeContext";
import { fetchAsyncUsersSelf, getUser } from "../../redux/Users/userSlice";

import Logo from "./../Logo";
import Profile from "./../Profile/Profile";
import GPTProfile from "./GPTProfile";

function MenuBar({ menu, setMenu, setIsModalOpen }) {
  const theme = useTheme();
  //const [response, setResponse] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");
  const dispatch = useDispatch();
  // const getUserDetails = async () => {
  //   const response = await axios.get(
  //     `https://crackube-backend-test.onrender.com/users/getUser/${window.localStorage.getItem(
  //       "userId"
  //     )}`
  //   );
  //   setResponse(response.data);
  //   console.log(response.data);
  // };
  async function getUserIP() {
    try {
      // Get user's approximate location and timezone using ipinfo.io
      const response = await axios.get("http://ip-api.com/json");
      const { lat, lon, timezone } = response.data;

      // Calculate current time in the user's timezone
      const currentTimeInUserTimezone = new Date().toLocaleTimeString("en-US", {
        timezone,
      });
      // Determine time of day
      if (
        currentTimeInUserTimezone >= "05:00:00" &&
        currentTimeInUserTimezone < "12:00:00"
      ) {
        setTimeOfDay("Morning");
      } else if (
        currentTimeInUserTimezone >= "12:00:00" &&
        currentTimeInUserTimezone < "17:00:00"
      ) {
        setTimeOfDay("Afternoon");
      } else {
        setTimeOfDay("Evening");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  useEffect(() => {
    getUserIP();
    //getUserDetails();
    dispatch(fetchAsyncUsersSelf(window.localStorage.getItem("userId")));
  }, []);

  const [lightBtn, setLightBtn] = useState("#000");
  const [darkBtn, setDarkBtn] = useState("#ffffff");
  const [toggle, setToggle] = useState(false);
  const { logout, isAuthenticated } = useAuth0();

  const clickHandler = () => {
    const toggle = document.getElementById("toggle");
    const sidebar = document.getElementById("crack-logo");
    toggle.onClick = function () {
      toggle.classList.toggle("active");
      sidebar.classList.toggle("active");
    };
  };
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handleMenu = () => {
    console.log("clicked");
    setMenu(!menu);
  };
  const response = useSelector(getUser);
  console.log(response);

  return (
    <div className="crack-logo" id={theme.mode}>
      <div className="menu-header">
        <Logo />

        <div className="side-arrow">
          <img src={Arrow} alt="" />
        </div>
      </div>

      <div className="menu-wrapper">
        <div className="menu-bar">
          <div className="menu-bar-half-1">
              <div className="new-chat">
                <button>
                  {" "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9987 8.33334H11.6654V5.00001C11.6654 4.55798 11.4898 4.13406 11.1772 3.8215C10.8646 3.50894 10.4407 3.33334 9.9987 3.33334C9.55667 3.33334 9.13275 3.50894 8.82019 3.8215C8.50763 4.13406 8.33203 4.55798 8.33203 5.00001L8.3912 8.33334H4.9987C4.55667 8.33334 4.13275 8.50894 3.82019 8.8215C3.50763 9.13406 3.33203 9.55798 3.33203 10C3.33203 10.442 3.50763 10.866 3.82019 11.1785C4.13275 11.4911 4.55667 11.6667 4.9987 11.6667L8.3912 11.6075L8.33203 15C8.33203 15.442 8.50763 15.866 8.82019 16.1785C9.13275 16.4911 9.55667 16.6667 9.9987 16.6667C10.4407 16.6667 10.8646 16.4911 11.1772 16.1785C11.4898 15.866 11.6654 15.442 11.6654 15V11.6075L14.9987 11.6667C15.4407 11.6667 15.8646 11.4911 16.1772 11.1785C16.4898 10.866 16.6654 10.442 16.6654 10C16.6654 9.55798 16.4898 9.13406 16.1772 8.8215C15.8646 8.50894 15.4407 8.33334 14.9987 8.33334Z"
                      fill="white"
                    />
                  </svg>{" "}
                  <p>New Chat</p>
                </button>
              </div>
              <div className="chat-history">
                <p>Today</p>
                <div className="history-bar">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66798 9.16667C6.66798 8.94566 6.75578 8.7337 6.91206 8.57742C7.06834 8.42114 7.2803 8.33334 7.50131 8.33334H12.5013C12.7223 8.33334 12.9343 8.42114 13.0906 8.57742C13.2468 8.7337 13.3346 8.94566 13.3346 9.16667C13.3346 9.38769 13.2468 9.59965 13.0906 9.75593C12.9343 9.91221 12.7223 10 12.5013 10H7.50131C7.2803 10 7.06834 9.91221 6.91206 9.75593C6.75578 9.59965 6.66798 9.38769 6.66798 9.16667ZM7.50131 11.6667C7.2803 11.6667 7.06834 11.7545 6.91206 11.9108C6.75578 12.067 6.66798 12.279 6.66798 12.5C6.66798 12.721 6.75578 12.933 6.91206 13.0893C7.06834 13.2455 7.2803 13.3333 7.50131 13.3333H10.8346C11.0557 13.3333 11.2676 13.2455 11.4239 13.0893C11.5802 12.933 11.668 12.721 11.668 12.5C11.668 12.279 11.5802 12.067 11.4239 11.9108C11.2676 11.7545 11.0557 11.6667 10.8346 11.6667H7.50131ZM1.66798 10C1.6684 8.17301 2.26921 6.39677 3.37796 4.94467C4.48672 3.49257 6.04195 2.44507 7.80431 1.9634C9.56668 1.48173 11.4385 1.59258 13.1317 2.27889C14.8249 2.96519 16.2456 4.18892 17.1752 5.76173C18.1049 7.33455 18.4918 9.16928 18.2766 10.9836C18.0614 12.7978 17.2559 14.4911 15.9841 15.8028C14.7124 17.1145 13.0448 17.9718 11.238 18.243C9.43121 18.5141 7.58541 18.184 5.98464 17.3033L2.74464 18.29C2.60013 18.334 2.44637 18.3379 2.2998 18.3013C2.15323 18.2647 2.01938 18.1889 1.91256 18.0821C1.80573 17.9753 1.72996 17.8414 1.69334 17.6949C1.65671 17.5483 1.66062 17.3945 1.70464 17.25L2.69131 14.005C2.0179 12.7777 1.66587 11.3999 1.66798 10ZM10.0013 3.33334C8.81788 3.33324 7.65574 3.64817 6.63428 4.24577C5.61281 4.84337 4.76883 5.70211 4.18902 6.73378C3.60922 7.76545 3.31449 8.93287 3.3351 10.1161C3.35571 11.2994 3.69092 12.4558 4.30631 13.4667C4.3674 13.5671 4.40655 13.6793 4.4212 13.7959C4.43585 13.9125 4.42566 14.0309 4.39131 14.1433L3.75298 16.2417L5.84798 15.6033C5.96074 15.569 6.07951 15.5589 6.19644 15.5739C6.31338 15.5888 6.42581 15.6284 6.52631 15.69C7.40494 16.2264 8.39587 16.5521 9.42143 16.6415C10.447 16.7309 11.4793 16.5815 12.4375 16.2052C13.3957 15.8288 14.2537 15.2357 14.9443 14.4723C15.6349 13.7088 16.1393 12.7958 16.418 11.8048C16.6967 10.8138 16.7421 9.77174 16.5506 8.76026C16.3592 7.74877 15.9361 6.79535 15.3146 5.97474C14.693 5.15412 13.8898 4.4886 12.968 4.03033C12.0462 3.57207 11.0308 3.3335 10.0013 3.33334Z"
                      fill="#737373"
                    />
                  </svg>
                  <h5>Hello!Assistance Reqw...</h5>
                </div>
              </div>
            </div>
          </div>

        <div className="menu-bar-half-2">
          <div className="profile">
            {<GPTProfile details={response} time={timeOfDay} setIsModalOpen = {setIsModalOpen} />}
          </div>
          <div className="modes" id={theme.mode}>
            <button className="light-mode" onClick={theme.toggleLight}>
              <img src={lightIcon} alt="" />
              <p>Light</p>
            </button>
            <button className="dark-mode" onClick={theme.toggleDark}>
              <img src={DarkIcon} alt="" />
              <p>Dark</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
