import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { useRef } from "react";
import axios from "axios";
function Email({ theme, setTheme, user }) {
  const [otp, setOtp] = useState("");
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpt, setIsOpt] = useState(false);
  const CustomModal = ({ isOpen, onRequestClose, children }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="modal-settings"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
        autoFocus={false}
      >
        {children}
      </Modal>
    );
  };
  const OTPModal = ({ isOpen, onRequestClose, children }) => {
  const rootRef = useRef<HTMLDivElement>(null);
    return (
      <div ref={useRef(rootRef)}>
      <Modal
        root ={rootRef.current ?? undefined}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="modal-settings"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
        autoFocus={true}
      >
        {children}
      </Modal>
      </div>
    );
  };
  const openModal = (val) => {
    setValue(val);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openOtp = () => {
    setIsOpt(true);
    setIsModalOpen(false);
  };
  const closeOtp = () => {
    setIsOpt(false);
  };
  const handleNext = async () => {
    openOtp();
    const response = await fetch(
      "https://crackube-backend-test.onrender.com/auth/requestResetPassword",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `userId=${window.localStorage.getItem("userId")}`
      }
    );
      console.log(response)

  }
  return (
    <div className="about-sep">
      <CustomModal isOpen={isModalOpen} onRequestClose={closeModal}>
        <div className="modal-update">
          <div className="set-top">
            <h1>Change {value}</h1>
          </div>
          <h6>
            For your security we will send a verification link to
            yogesh@gmail.com. This update will not take place until you follow
            the instructions listed in that email.
          </h6>
          <p>Current {value}</p>
          <div className="change-input-mdl">
            <p>{value == "Email" && user.email}</p>
          </div>
          <p>Change your {value}</p>
          {value == "Email" && (
            <input
              id="ded"
              className="change-input-mdl"
              type="text"
              value={email}
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
          <h6>
            We will signout all the other sessions from website. You need to
            signin again to use our website.
          </h6>
          <div className="upd-btn">
            <button onClick={() => {handleNext()}}>next</button>
          </div>
        </div>
      </CustomModal>
      <OTPModal isOpen={isOpt} onRequestClose={closeOtp}>
        <h1>OTP PAGE</h1>
        <button onClick={() => closeOtp()}>close</button>
        <div className="signup-otp">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span></span>}
              renderInput={(props) => <input {...props} />}
              containerStyle={"otp-container"}
              inputStyle={"input-box"}
              inputMode = "numeric"
              shouldAutoFocus={true}
            />
        </div>
      </OTPModal>
      <div className="my-details">
        <p>Email</p>
      </div>

      <div className="email-settings">
        <div>
          <p>EMAIL ADDRESS</p>
          <p>You can change only two times every 90 Days</p>
          <h3>yogesh@gmail.com</h3>
          <p>
            For your security we will send a verification link to
            yogesh@gmail.com. This update will not take place until you follow
            the instructions listed in that email.
          </p>
        </div>
        <p
          onClick={() => {
            openModal("Email");
          }}
        >
          Edit
        </p>
      </div>
    </div>
  );
}

export default Email;
