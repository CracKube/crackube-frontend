import React, { useState } from "react";
import "../LoginPage/LoginPage.css";
import Logo from "../Logo";
import apple from "../../Assets/Apple.svg";
import facebook from "../../Assets/Facebook.svg";
import twitter from "../../Assets/Twitter.svg";
import google from "../../Assets/Google.svg";
import signup from "../../Assets/SignUpImg.svg";
import axios from "axios";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState(false);
  const handleGoogleLogin = async () => {
    window.location.href =
      "https://crackube-backend-test.onrender.com/auth/google";
  };
  const handleMicrosoftLogin = async () => {
    window.location.href =
      "https://crackube-backend-test.onrender.com/auth/microsoft";
  };
  const handleLogin = async () => {
    //https://crackube-backend-test.onrender.com/users/signIn
    //url encoded

    const response = await fetch("https://crackube-backend-test.onrender.com/users/signIn", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${email}&password=${password}`
    }).then(() => {
        if(!response.data.message) {
            setLoginStatus(false)
        } else {
            localStorage.setItem("token", response.data.token);
            console.log(response.data);
            setLoginStatus(true)
        }
    })

    const authRes = await axios.get("https://crackube-backend-test.onrender.com/users/signIn", {
        headers : {
            "x-access-token" : localStorage.getItem("token")
        },
    }).then((response) => {
        console.log(authRes);
        window.location.href = "/home";
    })


    const data = await authRes.json();
    if (data.message === "Successfully logged in...") {
        window.location.href = "/answer";
    }
    else {
        alert("Invalid Credentials");
    }

  return (
    <div className="container">
      <div className="left-container">
        <img src={signup} alt="image" className="left-image" />
      </div>
      <div className="right-container">
        <div className="crackube-logo">
          <Logo />
        </div>
        <div className="login-content">
          <div className="login-content-top">
            <p className="text-account">Welcome back home✨</p>
            <p className="text-para">
              Let’s get started with your new journey with CracKube
            </p>
          </div>
          <form className="login-form" onSubmit={() => handleLogin()}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Enter your name"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="above-login-text">
              <p>Remember me for 30 days</p>
              <span>Forget Password</span>
            </div>
            <button type="submit" className="login-button" onSubmit={() => handleLogin()}>
              Login
            </button>
            <p className="para">
              Don’t have an account?<span className="span-signup">Signup</span>
            </p>
            <p className="text-or">or</p>
          </form>
          <div className="login-icons">
            <div
              className="apple-oauth-wrapper icon-container"
              style={{ cursor: "pointer" }}
            >
              <img src={apple} alt="apple" />
            </div>
            <div
              className="facebook-oauth-wrapper icon-container"
              onClick={() => handleMicrosoftLogin()}
              style={{ cursor: "pointer" }}
            >
              <img src={facebook} alt="facebook" />
            </div>
            <div
              className="twitter-oauth-wrapper icon-container"
              style={{ cursor: "pointer" }}
            >
              <img src={twitter} alt="twitter" />
            </div>
            <div
              className="google-oauth-wrapper icon-container"
              onClick={() => handleGoogleLogin()}
              style={{ cursor: "pointer" }}
            >
              <img src={google} alt="google" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
}
export default LoginPage;
