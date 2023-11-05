import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
// components

// Assets
import ck_logo from "../../Assets/CK_LOGO.png";
import apple from "../../Assets/Apple.svg";
import facebook from "../../Assets/Facebook.svg";
import twitter from "../../Assets/Twitter.svg";
import google from "../../Assets/Google.svg";
import { ToastContainer, toast } from "react-toastify";

//css
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();
  const handleSignUP = async (e) => {
    if (!email || !password || !name || !confirmPassword) {
      toast.warning("All Fields are Required", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (strength !== "strong") {
      toast.warning("Please enter a stronger password", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Confirm password and password are not matching", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (
      !validateName(name) ||
      !validateEmail(email) ||
      strength !== "strong" ||
      password !== confirmPassword
    ) {
      toast.warning("Please fix the input errors before signing up", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    setIsLoading(true);

    console.log(email, password, name);
    // https://crackube-backend-test.onrender.com/users/createUser
    // http://localhost:5000/users/createUser
    //url encoded
    e.preventDefault();

    const response = await fetch("https://api.crackube.com/auth/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `email=${email}&password=${password}&name=${name}`,
    });

    const data = await response.json();
    console.log(data);
    setUserId(data._id);
    console.log(userId);
    console.log(email);
    if (data.message === "User already exists") {
      toast.warning("User already exists", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setIsLoading(false);
    } else {
      toast.success("OTP Sent Successfully", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("token", data.token);
        navigate("/otp", {
          state: { email: `${email}`, userId: `${data.result._id}` },
        });
      }, 1000);
      setIsLoading(false);
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

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value); // Allow user to enter value
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

  const [textStrength, setTextStrength] = useState({
    hasMinLength: false,
    hasLowercase: false,
    hasUppercase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    validatePassword(newPassword);
    setPassword(newPassword);

    setTextStrength({
      hasMinLength: newPassword.length >= 8,
      hasLowercase: /[a-z]/.test(newPassword),
      hasUppercase: /[A-Z]/.test(newPassword),
      hasNumber: /\d/.test(newPassword),
      hasSpecialChar: /[!@#$%^&*]/.test(newPassword),
    });
  };

  const [strength, setStrength] = useState("");

  const validatePassword = (password) => {
    let strength = "";
    const hasMinLength = password.length >= 8;
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

    setStrength(strength);
  };

  const getPasswordStrengthClass = (strength) => {
    if (strength === "") {
      return "transparent";
    } else if (strength === "strong") {
      return "strong";
    } else if (strength === "good") {
      return "good";
    } else if (
      strength === "weak" ||
      strength === "okay" ||
      strength === "very weak"
    ) {
      return "weak";
    }
    return "";
  };

  const getPasswordStrengthWidth = (strength) => {
    switch (strength) {
      case "strong":
        return "100%";
      case "good":
        return "60%";
      case "weak":
      case "okay":
      case "very weak":
        return "40%";
      default:
        return "0%";
    }
  };

  const progressBarClass = getPasswordStrengthClass(strength);
  const progressBarWidth = getPasswordStrengthWidth(strength);

  return (
    <div className="signup_container">
      <div className="signUp_form-container">
        <ToastContainer />

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
              value={name}
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
            {/* <div>
              {strength === "strong" && (
                <div
                  className="progress-bar bg-success"
                  style={{ width: "100%" }}
                >
                  Strong
                </div>
              )}
              {strength === "good" && (
                <div
                  className="progress-bar bg-warning"
                  style={{ width: "60%" }}
                >
                  Good
                </div>
              )}
              {strength === "weak" && (
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "40%" }}
                >
                  Weak
                </div>
              )}
              {strength === "okay" && (
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "40%" }}
                >
                  Okay
                </div>
              )}
              {strength === "very weak" && (
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "40%" }}
                >
                  Very Weak
                </div>
              )}
            </div> */}
            <div className="progress-bar-container">
              <div
                className={`progress-bar ${progressBarClass}`}
                style={{ width: progressBarWidth }}
              ></div>
            </div>
            <div className="strength_container-texts">
              <div className="strength-texts">
                <div
                  className={`strength-text ${
                    textStrength.hasMinLength ? "green" : ""
                  }`}
                >
                  At least 8 characters
                </div>
                <div
                  className={`strength-text ${
                    textStrength.hasLowercase ? "green" : ""
                  }`}
                >
                  Lower-case letters (a-z)
                </div>
                <div
                  className={`strength-text ${
                    textStrength.hasUppercase ? "green" : ""
                  }`}
                >
                  Upper-case letters (A-Z)
                </div>
                <div
                  className={`strength-text ${
                    textStrength.hasNumber ? "green" : ""
                  }`}
                >
                  Numbers (0-9)
                </div>
                <div
                  className={`strength-text ${
                    textStrength.hasSpecialChar ? "green" : ""
                  }`}
                >
                  Special character (eg. !@#$%^&*)
                </div>
              </div>
            </div>
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
        {isLoading === false ? (
          <button className="signUp_button" onClick={(e) => handleSignUP(e)}>
            Signup
          </button>
        ) : (
          <button className="signUp_button">
            {/* <i class="fa fa-spinner fa-spin"></i> */}
            <i class="fa fa-circle-o-notch fa-spin"></i>
          </button>
        )}

        <button
          className="signUp_button-mobile"
          onClick={(e) => handleSignUP(e)}
        >
          Agree and Continue
        </button>

        <p className="signUp_para2 mobile">
          Already have an account ? <a href="/login">Login</a>{" "}
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
