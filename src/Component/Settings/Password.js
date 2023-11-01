import React from "react";
import Modal from "react-modal";
import { useState } from "react";
function Password({ theme, setTheme, user }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
  const openModal = (val) => {
    setValue(val);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleNext = async () => {
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

  };
  return (
    <div className="about-sep">
      <CustomModal isOpen={isModalOpen} onRequestClose={closeModal}>
        <div className="modal-update">
          <div className="set-top">
            <h1>Change {value}</h1>
          </div>
          <h6>
            `For your security we will send a verification link to
             {` ${user.email}`}. This update will not take place until you follow
            the instructions listed in that email.``
          </h6>
          <p>New {value}</p>
          <div>
          {value == "Password" && (
            <input
              id="ded"
              className="change-input-mdl"
              type="text"
              value={password}
              autoFocus
              onChange={(e) => setPassword(e.target.value)}
            />
          )}
          </div>
          <p>Confirm New {value}</p>
          {value == "Password" && (
            <input
              id="ded"
              className="change-input-mdl"
              type="text"
              
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
      <div className="my-details">
        <p>Password</p>
      </div>
      <div className="social-profile-sec">
        <div className="prof-desc-sec">
          <div>
            <p>
              We will send a verification link to danielcooper@gmail.com. This
              update will not take place until you follow the <br />{" "}
              instructions listed in that email. <br />
              If you do not have access to danielcooper@gmail.com, please
              contact support for assistance.
            </p>
          </div>
          <div>
            <button onClick={() => openModal("Password")}>Reset Password</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
