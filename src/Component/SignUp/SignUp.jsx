import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignUp.css'
// components

// Assets
import ck_logo from "../../Assets/CK_LOGO.png";
import apple from "../../Assets/Apple.svg";
import facebook from "../../Assets/Facebook.svg";
import twitter from "../../Assets/Twitter.svg";
import google from "../../Assets/Google.svg";

//css
import "./SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  let navigate = useNavigate();
  const handleSignUP = async (e) => {
    console.log(email, password, username);
    // https://crackube-backend-test.onrender.com/users/createUser
    // http://localhost:5000/users/createUser
    //url encoded
    e.preventDefault();

    const response = await fetch(
      "https://crackube-backend-test.onrender.com/auth/createUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${email}&password=${password}&firstName=${username}&lastName=${username}`,
      }
    );

    const data = await response.json();
    console.log(data);
    setUserId(data._id);
    console.log(userId);
    console.log(email);
    if (data.message === "User already exists") {
      window.alert("User already exists");
    } else {
      window.alert("User created successfully");
      localStorage.setItem("token", data.token);
      navigate("/otp", {
        state: { email: `${email}`, userId: `${data.result._id}` },
      });
    }
  };

  const handleGoogleLogin = async () => {
    window.location.href =
      "https://crackube-backend-test.onrender.com/auth/google";
  };
  const handleMicrosoftLogin = async () => {
    window.location.href =
      "https://crackube-backend-test.onrender.com/auth/microsoft";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z ]{2,}$/;
    return nameRegex.test(name);
  };

  const validatePassword = (password) => {
    let strength = "";
    const hasMinLength = password.length >= 5;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);

    if (hasMinLength && hasNumber && hasSpecialChar && hasUpper && hasLower)
      strength = "strong";
    else if ((hasNumber || hasSpecialChar) && (hasUpper || hasLower))
      strength = "good";
    else if (hasMinLength && !hasNumber && !hasSpecialChar) strength = "weak";
    else if (!hasMinLength && (hasNumber || hasSpecialChar)) strength = "okay";
    else strength = "very weak";

    setPasswordStrength(strength);
  };

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value;
    setUsername(value); // Allow user to enter value
    if (value && !validateName(value)) {
      setNameError(
        "Name must be at least 2 characters long and contain no numbers or symbols"
      );
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value); // Allow user to enter value
    if (value && !validateEmail(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value); // Allow user to enter value
    validatePassword(value);
    if (
      value &&
      (passwordStrength === "very weak" || passwordStrength === "weak")
    ) {
      setPasswordError("Password is too weak");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="signup_container">

      <div className="signUp_form-container">
        <div className="signUp_logo-container">
          <img src={ck_logo} alt="logo" className="signUp_logo" />
          <span className="signUpLogo_text">CracKube</span>
        </div>
        <span className="signUp_title">Create Your Account</span>
        <p className="signUp_para">
          Let's get started with your new journey with <br />
          CracKube
        </p>
        <div className="signUpForm">
          <div className="">
            <label className="signUpForm_label">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="signUpForm_input"
              value={username}
              onChange={handleNameChange}
              required
            />
            {nameError && <div className="error">{nameError}</div>}
          </div>

          <div className="">
            <label className="signUpForm_label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="signUpForm_input"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <div className="error">{emailError}</div>}
          </div>

          <div className="">
            <label className="signUpForm_label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="signUpForm_input"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {/* {passwordError && <div className="error">{passwordError}</div>} */}
            <div className={`error passwordStrength ${passwordStrength}`}>
              {passwordStrength}
            </div>
          </div>

          <div className="">
            <label className="signUpForm_label">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="signUpForm_input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <p className="signUp_para2">
          By Signing Up, you agree to <span className="span">terms of use</span>{" "}
          and <span className="span">privacy statements</span>
        </p>

        <p className="signUp_para2-mobile">
          By Selecting Agree & Continue, I agree with{" "}
          <span className="span">terms of use</span> <br />
          <span className="span">Payment terms of service</span>&{" "}
          <span className="span">privacy Policy </span>
        </p>

        <button className="signUp_button" onClick={(e) => handleSignUP(e)}>
          Signup
        </button>
        <button className="signUp_button-mobile">Agree and Continue</button>

        <p className="signUp_para2 mobile">
          Already have an account ?{" "}
          <span
            className="login_link"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </span>
        </p>
        <p className="signUp_para2 mobile">or</p>

        <div className="signUp_socials">
          <div className="signUp_social-container signUp_apple">
            <img src={apple} alt="apple" className="signUp_social-logo" />
          </div>
          <div className="signUp_social-container signUp_facebook">
            <img src={facebook} alt="facebook" className="signUp_social-logo" />
          </div>
          <div className="signUp_social-container signUp_twitter">
            <img src={twitter} alt="twitter" className="signUp_social-logo" />
          </div>
          <div
            className="signUp_social-container signUp_google"
            onClick={() => handleGoogleLogin()}
          >
            <img src={google} alt="google" className="signUp_social-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;