import React, { useState } from "react";
import "../../styles/Sheets/Style.css";
import LoginDesign from "../../Assets/SignUpImg.svg";
import { useLocation } from "react-router-dom";
import Avatar from '../../Assets/Avatar.avif'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FourthPage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [userName, setUserName] = useState("");
  const [image, setImage] = useState("https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1541155057.1694256294&semt=ais");
  const {state} = useLocation();
  console.log(state.date);
  console.log(state.gender);
  const formData = new FormData();
    formData.append("profilePicUrl", image);
    formData.append("dob", state.date);
    formData.append("gender", state.gender);
    formData.append("username", userName);
    console.log(formData);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setFile(file);
    if (file) {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (allowedTypes.includes(file.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          var dataURL = reader.result;
          setImage(dataURL.split(",")[1]); //`data:image/png;base64,${image}`
          setImage(`data:image/png;base64,${dataURL.split(",")[1]}`)
          console.log(image);
        };
      } else {
        setImage("");
      }
    }
  };
  const handleImageState = () => {
    setImage("");
  };




  // send date, gender, image, username to the backend
  // use axios to post the data to the backend
  // use formData to append the data
  // use headers to set the content type to multipart/form-data
  const handleProfile = async () => {
    const response = await axios.post(
      `https://crackube-backend-test.onrender.com/users/editProfile/${state.userId}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    )
 
    console.log(response)
    if(response.status === 200) {
      window.alert("Profile Updated");
      navigate('/home', {state: {userId: state.userId}})
      window.localStorage.setItem("userId", state.userId);
     
  }else{
    window.alert("Something went wrong");
  }
}

  return (
    <div className="main1">
    <div className="Design">
      <img className="img" src={LoginDesign} alt="" />
    </div>
    <div className="Welcome">
      <p className="txt">Make yourself Unique</p>
      <div className="avatar">
      <label htmlFor="file" className="file-upload">
            
            {image && (
              <div className="upload-image">
                <button className="btn-remove" onClick={handleImageState}>
                  Cancel
                </button>
              </div>
            )}
            {!image && (
              <div className="upload-box" >
              
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.7 20.0839C38.0282 16.6793 36.1952 13.6136 33.5141 11.4104C30.8331 9.20717 27.4702 8.00312 24 8.00391C18.22 8.00391 13.2 11.2839 10.7 16.0839C7.76047 16.4016 5.04201 17.7943 3.06698 19.9945C1.09194 22.1948 -0.000343404 25.0473 8.09855e-08 28.0039C8.09855e-08 34.6239 5.38 40.0039 12 40.0039H38C43.52 40.0039 48 35.5239 48 30.0039C48 24.7239 43.9 20.4439 38.7 20.0839ZM28 26.0039V34.0039H20V26.0039H14L24 16.0039L34 26.0039H28Z"
                    fill="#F42271"
                  />
                </svg>
                <h3>Drag & drop an image to upload</h3>
                <p>only png or jpeg upto 10 MB</p>
                <div className="file-input">
                <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleImageChange}
              accept=".jpg, .jpeg, .png"
            >
                
            </input>
                <div className="upload--btn">Choose File</div>
                </div>
                
              </div>
            )}
          </label>

        <img src= {`${image}`} alt="" />
        <p>Avatar</p>
      </div>
      <form action="">
        <p className="Patxt">Enter your UserName</p>
        <input
          placeholder="Enter your Username"
          className="Password"
          type="text"
        onChange={(e) => setUserName(e.target.value)}
        />
      </form>

      <button onClick={() => handleProfile()}>Enter CK WORLD</button>
    </div>
  </div>
  )
}

export default FourthPage