import React, { useState } from "react";
import "./OTP.css";
import signupimage from "../../Assets/SignUpImg.svg";
import Logo from "../Logo";
import { useEffect } from "react";
import OTPInput from "react-otp-input";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ck_logo from "../../Assets/CK_LOGO.png";
import { ToastContainer, toast } from "react-toastify";
const OTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const { state } = useLocation();
  const { email, userId } = state;

  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(30); // Initial countdown time in seconds

  // send otp to backend
  // verify otp from backend
  // if otp is verified then redirect to login page
  // else show error message
  const handleOtp = async () => {
    const response = await fetch(
      "https://crackube-backend-test.onrender.com/users/sendEmail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${email}&_id=${userId}`,
      }
    );
    console.log(response);

    if (response.status === 200) {
      toast.success("OTP sent successfully", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setIsResendDisabled(true);

      // Start the countdown timer
      let countdown = 30;
      const countdownInterval = setInterval(() => {
        countdown--;
        setResendCountdown(countdown);
        if (countdown <= 0) {
          clearInterval(countdownInterval);
          setIsResendDisabled(false);
        }
      }, 1000);
    } else {
      toast.error("Failed to send OTP", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  // Function to handle OTP verification
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) {
      toast.error("Please enter OTP", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    const response = await fetch(
      "https://crackube-backend-test.onrender.com/users/verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `_id=${userId}&otp=${otp}`,
      }
    );

    if (response.status === 202) {
      toast.success("OTP Verified", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/third", { state: { userId: userId } });
      }, 500);
    } else {
      toast.error("Incorrect OTP", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    handleOtp();
  }, []);

  return (
    <div className="container">
      <ToastContainer />

      <div className="right-container">
        <div className="signup-logo">
          <div className="signUp_logo-container">
            <img src={ck_logo} alt="logo" className="signUp_logo" />
            <span className="signUpLogo_text">CracKube</span>
          </div>
        </div>
        <div className="signupotp-content">
          <div className="signupotp-heading">
            <p className="text-heading">Please Enter your Verification OTP</p>
            <p className="text-para">
              We have sent one-time password to your registered email
            </p>
          </div>
          <div className="signup-otp">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span></span>}
              renderInput={(props) => <input {...props} />}
              containerStyle={"otp-container"}
              shouldAutoFocus={true}
              inputStyle={"input-box"}
              inputType="integer"
            />
          </div>
          <div className="signupotp-bottom">
            <p className="resend">
              {isResendDisabled ? (
                `Resend OTP in ${resendCountdown} seconds`
              ) : (
                <button className="resend-otp-button" onClick={handleOtp}>
                  Resend OTP
                </button>
              )}
            </p>
            <button
              className="verifyotp-button"
              onClick={(e) => handleVerifyOtp(e)}
            >
              Verify OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
