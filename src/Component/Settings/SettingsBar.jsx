import React from "react";
import User from "../../Assets/ans-user.png";
import write from '../../Assets/write.svg'
const SettingsBar = ({ clicked }) => {
  console.log(clicked);
  return (
    <>
      {clicked == 0 && (
        <div className="about-sep">
          <div className="my-details">
            <p>Edit Profile</p>
            <p>PROFILE PHOTO</p>
          </div>
          <div className="prof-update">
            <div>
              <div className="edit-pic">
                <img src= {write} alt="" />
              </div>
              <img src={User} alt="" />
            </div>
          </div>
          <div className="prof-upt-user">
            <div>
              <p>USERNAME</p>
              <p>You can change only two times in 90 Days</p>
              <p>@sophiamargrete</p>
            </div>
            <p>Edit</p>
          </div>
          <div className="prof-upt-user">
            <div>
              <p>FULL NAME</p>
              <p>This is your full name</p>
              <p>James Miller</p>
            </div>
            <p>Edit</p>
          </div>
          <div className="prof-upt-user">
            <div>
              <p>GENDER</p>
              <p>This wont be part of your public profile</p>
              <p>Male</p>
            </div>
            <p>Edit</p>
          </div>
          <div className="prof-upt-user">
            <div>
              <p>DATE OF BIRTH</p>
              <p>This wont be part of your public profile</p>
              <p>16.09.2003</p>
            </div>
            <p>Edit</p>
          </div>
          <div className="prof-upt-user">
            <div>
              <p>COUNTRY</p>
              <p>This wont be part of your public profile</p>
              <p>India</p>
            </div>
            <p>Edit</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsBar;
