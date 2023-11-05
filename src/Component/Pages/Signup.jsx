import React, { useState } from "react";
import "../../styles/Sheets/Style.css";
import LoginDesign from "../../Assets/LoginDesign.svg";
import { NavLink } from "react-router-dom";
import OTP from "../../Component/OTP Page/OTP.js";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import ck_logo from "../../Assets/CK_LOGO.png";

import { LoginSocialFacebook } from "reactjs-social-login";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    loginWithPopup,
    loginWithRedirect,
    user,
    logout,
    isAuthenciated,
    getAccessTokenSilently,
  } = useAuth0();

  const handleLogin = async () => {
    setIsLoading(true);
    //https://crackube-backend-test.onrender.com/users/signIn
    //url encoded
    console.log("Login clicked:");

    const email = document.querySelector(".Email").value;
    const password = document.querySelector(".Password").value;

    if (!email || !password) {
      setIsLoading(false);
      toast.warning("All Fields are Required", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    const response = await fetch(
      "https://crackube-backend-test.onrender.com/auth/signIn",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${email}&password=${password}`,
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.message === "Successfully logged in...") {
      toast.error("Login successful", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.result._id);
      setIsLoading(false);

      window.location.href = "/home";
      setLoginStatus(true);
    } else {
      setIsLoading(false);

      toast.error("Invalid Email or Password", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    setIsLoading(false);
  };
  return (
    <div className="main1">
      <ToastContainer />

      <div className="signUp_logo-container">
        <img src={ck_logo} alt="logo" className="signUp_logo" />
        <span className="signUpLogo_text">CracKube</span>
      </div>
      <div className="Welcome">
        <p className="txt">Welcome back✨</p>
        <p className="req">
          {" "}
          Let’s get started with your new journey with <br /> CracKube{" "}
        </p>
        <form action="">
          <p className="Emtxt">Email*</p>
          <input
            placeholder="Enter your email address"
            className="Email"
            type="text"
          />
        </form>
        <form action="">
          <p className="Patxt">Password*</p>
          <input
            placeholder="Enter your password"
            className="Password"
            type="password"
          />
        </form>
        <div className="sep">
          <div className="checkBox"></div>
          <p className="rem"> Remember me</p>
          <NavLink className="for" to="/forgetpassword">
            {" "}
            Forgot password{" "}
          </NavLink>
        </div>
        <div className="Button">
          {isLoading === false ? (
            <button onClick={() => handleLogin()}>Login</button>
          ) : (
            <button onClick={() => handleLogin()}>
              {" "}
              <i class="fa fa-circle-o-notch fa-spin"></i>
            </button>
          )}
        </div>
        <div className="separator">
          <div className="left"></div>
          <div>
            <p>or continue with</p>
          </div>
          <div className="left"></div>
        </div>
        <div className="Align">
          <div className="Google"></div>

          <LoginSocialFacebook
            appId="834219138096228"
            onResolve={(response) => {
              console.log(response);
            }}
            onReject={(error) => {
              console.log(error);
            }}
          >
            <div className="Facebook"></div>
          </LoginSocialFacebook>

          <div className="Apple"></div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
