import React from "react";
import Search from "../../Assets/search.svg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import MenuBar from "../MenuBar";
import { MainBar, TopNavBar } from "../Constants";
import homeIcon from "../../Assets/homeIcon.svg";
import myDetails from "../../Assets/my-details.png";

function DeleteAccount({ theme, setTheme }) {
  return (
    <div className="about-sep">
      <div className="my-details">
        <p>Delete Account</p>
      </div>
        <div className="prof-desc-del">

          <div className="del-manage">
            <p>DELETE YOUR ACCOUNT</p>
            <p>
            We will send a verification OTP to yogesh@gmail.com. This is irreversible process. Deleting your CracKube account will delete all the user data, revenue share, stats and many more contributed in the website.
            </p>
            <p>If you do not have access to yogesh@gmail.com, please contact support for assistance.</p>
            <div className="del-acc">
              <button>Delete My Account</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default DeleteAccount;
