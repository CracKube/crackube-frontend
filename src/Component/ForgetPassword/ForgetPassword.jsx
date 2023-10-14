import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Assets
import ck_logo from "../../Assets/CK_LOGO.png";
import signUp_image from "../../Assets/SignUpImage.png";

//css
import "./ForgetPassword.css";

const ForgetPswd = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value); // Allow user to enter value
    if (value && !validateEmail(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="forgotPassword_container">
      <img src={signUp_image} alt="signUp_image" className="signUpImage" />
      <div className="signup_back-mobile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.0603 21.5459C16.3415 21.2646 16.4995 20.8832 16.4995 20.4854C16.4995 20.0877 16.3415 19.7062 16.0603 19.4249L8.63533 11.9999L16.0603 4.57493C16.3336 4.29202 16.4848 3.91312 16.4813 3.51983C16.4779 3.12653 16.3202 2.75031 16.0421 2.4722C15.7639 2.19409 15.3877 2.03634 14.9944 2.03292C14.6011 2.0295 14.2222 2.18069 13.9393 2.45393L5.45383 10.9394C5.17262 11.2207 5.01465 11.6022 5.01465 11.9999C5.01465 12.3977 5.17262 12.7791 5.45383 13.0604L13.9393 21.5459C14.2206 21.8271 14.6021 21.9851 14.9998 21.9851C15.3976 21.9851 15.779 21.8271 16.0603 21.5459Z"
            fill="#737373"
          />
        </svg>
      </div>
      <div className="forgotPassword_form-container">
        <div className="signUp_logo-container">
          <img src={ck_logo} alt="logo" className="signUp_logo" />
          <span className="signUpLogo_text">CracKube</span>
        </div>
        <span className="signUp_title">Forgot Password</span>
        <p className="signUp_para">
          Enter your email to reset password. OTP will <br />
          be sent to your account.
        </p>
        <div className="signUpForm">
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
        </div>

        <button className="forgotPassword_button">Reset Password</button>
        <button className="forgotPassword_button-mobile">Reset Password</button>

        <p className="signUp_para2 mobile">
          <span
            className="login_link"
            onClick={() => {
              navigate("/signUp");
            }}
          >
            Resend code
          </span>
        </p>

        <p className="forgotPassword_para2-mobile">
          <span
            className="forgotPassword_link"
            onClick={() => {
              navigate("/signUp");
            }}
            style={{
              color: "red",
            }}
          >
            Resend code
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgetPswd;
