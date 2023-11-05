import React, { useState, useEffect } from "react";
import "./ForgetPassword.css";
import image from "../../Assets/SignUpImg.svg";
import Logo from "../Logo";
import { ToastContainer, toast } from "react-toastify";
import ck_logo from "../../Assets/CK_LOGO.png";
const ForgetPswd = () => {
  const [email, setEmail] = useState("");
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(30); // Initial countdown time in seconds

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter Email", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    const response = await fetch(
      "https://crackube-backend-test.onrender.com/auth/requestResetPassword",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${email}`,
      }
    );
    const data = await response.json();
    console.log(data);

    // Disable the "Resend mail" button
    setIsResendDisabled(true);

    // Start the countdown timer
    let countdown = 30;
    const countdownInterval = setInterval(() => {
      countdown--;
      setResendCountdown(countdown);
      if (countdown <= 0) {
        clearInterval(countdownInterval);
        // Enable the "Resend mail" button
        setIsResendDisabled(false);
      }
    }, 1000);
  };

  return (
    <div className="forgot_container">
      <ToastContainer />
      <div className="forgot_logo-container">
        <img src={ck_logo} alt="logo" className="signUp_logo" />
        <span className="signUpLogo_text">CracKube</span>
      </div>
      <div className="text">
        <p className="text-heading">Forget Password</p>
        <p className="text-para">
          Enter your email to reset the password. OTP will be sent to your
          account.
        </p>
      </div>
      <form className="reset-form" onSubmit={handleReset}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={handleReset} className="reset-button">
          Reset Password
        </button>
      </form>

      <p className="resend-text">
        {isResendDisabled ? (
          `Resend mail in again ${resendCountdown} seconds`
        ) : (
          <p
            className="resend-mail-button"
            onClick={handleReset}
            disabled={isResendDisabled}
            style={{
              cursor: "pointer",
            }}
          >
            Resend Mail
          </p>
        )}
      </p>
    </div>
  );
};

export default ForgetPswd;
