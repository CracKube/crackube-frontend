import React, { useState } from "react";
import "./ForgetPassword.css";
import image from "../../Assets/SignUpImg.svg";
import Logo from "../Logo";

const ForgetPswd = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    console.log("Signup clicked:", {
      email,
    });
  };

  return (
    <div className="container">
      <div className="right-container">
        <div className="crackube-logo">
          <Logo />
        </div>
        <div className="text">
          <p className="text-heading">Forget Password</p>
          <p className="text-para">
            Enter your email to reset password. OTP will be sent to your
            account.
          </p>
        </div>
        <form className="reset-form" onSubmit={handleReset}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter your name"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="reset-button">
            Reset Password
          </button>
        </form>
        <a className="resend-text">Resend code</a>
      </div>
    </div>
  );
};

export default ForgetPswd;
