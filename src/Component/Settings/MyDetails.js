import React, { useEffect } from "react";
import User from "../../Assets/ans-user.png";
import write from "../../Assets/write.svg";
import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";
function MyDetails({ theme, setTheme, user }) {
  const [value, setValue] = useState("");


  const formData = new FormData();
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState(user.username);
  const [name, setName] = useState(user.name);
  const [gender, setGender] = useState(user.gender);
  const [dob, setDob] = useState(user.dob);
  const [country, setCountry] = useState(user.country);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(name);
  value == "Username" && formData.append("username", username);
  value == "Name" && formData.append("name", name);
  value == "Gender" && formData.append("gender", gender);
  value == "Dob" && formData.append("dob", dob);
  value == "Country" && formData.append("country", country);
  // formData.append("image", image);
  console.log(formData);
  const datePick = (e) => {
    setDob(e.target.value);
  };
  const countryOptions = [
    { value: "india", label: "India" },
    { value: "usa", label: "United States" },
    { value: "canada", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
  ];
  const CustomModal = ({ isOpen, onRequestClose, children }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="modal-settings"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        {children}
      </Modal>
    );
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = (val) => {
    setValue(val);
    setIsModalOpen(true);
  };
  const handleProfile = async () => {
    const response = await axios.post(
      `https://crackube-backend-test.onrender.com/users/editProfile/${window.localStorage.getItem(
        "userId"
      )}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    console.log(response);
    if (response.status === 200) {
      window.alert("Profile Updated");
    } else {
      window.alert("Something went wrong");
    }
  };

  return (
    <div className="about-sep">
      <CustomModal isOpen={isModalOpen} onRequestClose={closeModal}>
        <div className="modal-update">
          <div className="set-top">
            <h1>Change {value}</h1>
          </div>
          <p>Current {value}</p>
          <div className="change-input-mdl">
            <p>
              {value == "Username" && user.username}
              {value == "Name" && user.name}
              {value == "Gender" && user.gender}
              {value == "Dob" && user.dob}
            </p>
          </div>
          <p>Change your {value}</p>
          {value == "Username" && (
            <input
              id="ded"
              className="change-input-mdl"
              type="text"
              value={username}
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          {value == "Name" && (
            <input
              id="ded"
              className="change-input-mdl"
              type="text"
              value={name}
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />
          )}
          {value == "Gender" && (
            <div className="radio_container">
              <input
                type="radio"
                placeholder="Enter your email"
                className="radio_button"
                name="gender"
                value="Male"
                autoFocus
                onChange={() => {
                  setGender("Male");
                }}
                required
              />
              Male
              <input
                type="radio"
                placeholder="Enter your email"
                className="radio_button"
                name="gender"
                autoFocus
                value="Male"
                onChange={() => {
                  setGender("Female");
                }}
                required
              />
              Female
              <input
                type="radio"
                placeholder="Enter your email"
                className="radio_button"
                name="gender"
                autoFocus
                value="Female"
                onChange={() => {
                  setGender("Other");
                }}
                required
              />
              Other
            </div>
          )}

          {value == "Dob" && (
            <div >
            <div
              className="dob-third"
              onChange={(e) => {
                setDob(e.target.value);
              }}
              autoFocus
            >
              <label className="third_label">Date of Birth</label>
              <br />
              <br />
              <input type="date" className="signUpForm_input" value={dob} autoFocus required />
            </div>
            </div>
          )}

          {value == "Country" && (
            <div>
              <div className="country-third">
                <label className="third_label">Your Country</label>
                <br />
                <br />
                <select
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  className="signUpForm_input"
                  required
                >
                  <option value="" disabled>
                    Select Your Country
                  </option>
                  {countryOptions.map((ele, index) => (
                    <option value={ele.value}>{ele.label}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <h6>some info</h6>
          <div className="upd-btn">
            <button onClick={handleProfile}>Change {value}</button>
          </div>
        </div>
      </CustomModal>
      <div className="my-details">
        <p>Edit Profile</p>
        <p>PROFILE PHOTO</p>
      </div>
      <div className="prof-update">
        <div>
          <div className="edit-pic">
            <img src={write} alt="" />
          </div>
          <img src={User} alt="" />
        </div>
      </div>
      <div className="prof-upt-user">
        <div>
          <p>USERNAME</p>
          <p>You can change only two times in 90 Days</p>
          <p>@{user.username}</p>
        </div>
        <p
          onClick={() => {
            openModal("Username");
          }}
        >
          Edit
        </p>
      </div>
      <div className="prof-upt-user">
        <div>
          <p>FULL NAME</p>
          <p>This is your full name</p>
          <p>{user.name}</p>
        </div>
        <p
          onClick={() => {
            openModal("Name");
          }}
        >
          Edit
        </p>
      </div>
      <div className="prof-upt-user">
        <div>
          <p>GENDER</p>
          <p>This wont be part of your public profile</p>
          <p>{user.gender}</p>
        </div>
        <p
          onClick={() => {
            openModal("Gender");
          }}
        >
          Edit
        </p>
      </div>
      <div className="prof-upt-user">
        <div>
          <p>DATE OF BIRTH</p>
          <p>This wont be part of your public profile</p>
          <p>{user.dob}</p>
        </div>
        <p
          onClick={() => {
            openModal("Dob");
          }}
        >
          Edit
        </p>
      </div>
      <div className="prof-upt-user">
        <div>
          <p>COUNTRY</p>
          <p>This wont be part of your public profile</p>
          <p>{user.country}</p>
        </div>
        <p
          onClick={() => {
            openModal("Country");
          }}
        >
          Edit
        </p>
      </div>
    </div>
  );
}

export default MyDetails;
