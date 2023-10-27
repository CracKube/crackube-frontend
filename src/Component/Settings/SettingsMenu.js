import React from "react";
import Search from "../../Assets/search.svg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import MenuBar from "../MenuBar";
import { MainBar, TopNavBar } from "../Constants";
import homeIcon from "../../Assets/homeIcon.svg";
import MyDetails from "../../Assets/my-details.png";
import { useState } from "react";
import SettingsBar from "./SettingsBar";
function SettingsMenu({ theme, setTheme }) {
  const [clicked, setClicked] = useState(0);

  const list = [
    {
      name: "Edit Profile",
      to : "/my-details",
    },
    {
      name: "Email",
      to : "/email",
    },
    {
      name: "Password",
      to : "/password",
    },
    {
      name: "Notification",
      to : "/notification",
    },
    {
      name: "Language",
      to : "/language",
    },
    {
      name: "Payment Method",
      to : "/payment",
    },
    {
      name: "Delete Account",
      to : "/delete-account",
    }
  ];
  const handleBtn = (index, value) => {
    setClicked(index);
  };
  return (
    <div>
      <div className="home" id={theme}>
        <MenuBar theme={theme} setTheme={setTheme} />

        <div className="home-container">
          <TopNavBar theme={theme} />
          <div className="set-cover">
            <div className="settings-cover">
              <p>Settings</p>
              <div className="list" id={theme}>
                <ul>
                {list.map((item, index) => {
                  return (
                    <button
                      className={
                        clicked === index
                          ? 'list-btn'
                          : 'list-not-clicked'
                      }
                      key={index}
                      onClick={() => {handleBtn(index, item.to)}}
                    >
                      {item.name}
                    </button>
                  );
                })}
                </ul>
              </div>
            </div>
            <SettingsBar clicked = {clicked} />
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default SettingsMenu;
