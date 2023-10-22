import React, { useEffect } from "react";
import { useState } from "react";
import DropDownSplash from "../UploadPage/DropDownSplash";
import UnSplash from "../UnSplash/UnSplash";
import { createContext } from "react";

import UnSplash1 from '../../Assets/unsplash-logo.png'
import axios from "axios";
export const StateContext = createContext();
const UploadSection = ({ body, title, setFirst }) => {
  
  const [response, setResponse] = useState("");
  
  const getUserDetails = async () => {
    const response = await axios.get(`https://crackube-backend-test.onrender.com/users/getUser/${window.localStorage.getItem("userId")}`);
    setResponse(response.data);
      console.log(response.data)
    
  }
  const [category, setCategory] = useState("");

  
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [blogImageProvider, setBlogImageProvider] = useState("");
  const [blogImageUrl, setBlogImageUrl] = useState("");
  const formData = new FormData();

    formData.append("blogImage", file);
    formData.append("userPosted", localStorage.getItem("userId"));
    formData.append("blogTitle", title);
    formData.append("blogBody", body);
    formData.append("blogTags", category);
    formData.append("blogImageProvider", blogImageProvider);
    formData.append("blogImageUrl", blogImageUrl);
    console.log(formData);
  const handleImageChange = (e) => {


    const file = e.target.files[0];
    setBlogImageProvider("upload");
    console.log(file);
    if (file) {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      setFile(file);
      
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

  // upload the images, title, body, tags, category, userPosted, userId to the backend url https://crackube-backend-test.onrender.com/blogs/post/
  // use axios to post the data to the backend
  // use formData to append the data
  // use headers to set the content type to multipart/form-data
  // use async await to wait for the response from the backend
  const redirect = async () => {
    try {
      let data;
      data = await axios.post(
        "https://crackube-backend-test.onrender.com/blogs/post/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(data.response);
      setFirst(false);
    } catch (error) {
      console.log(error.response);
    }

  }
  // upload the images, title, body, tags, category, userPosted, userId to the backend url https://crackube-backend-test.onrender.com/blogs/post/


  useEffect(() => {
      getUserDetails();
    }, [])
  
  const [state, setState] = useState(false);
  const value = {
    state,
    setState
  }

  
  const UploadThumbanil = ({ image, setImage, setFile }) => {
    const options = [{ value: "Upload" }, { value: "UnSplash" }];
    return (
      <div className="thumbnail">
          <img src= {UnSplash1} alt="" />
        <DropDownSplash
          options={options}
          image={image}
          setImage={setImage}
          setFile={setFile}
          setBlogImageUrl = {setBlogImageUrl} 
          setBlogImageProvider = {setBlogImageProvider}
        />
      </div>
    );
  };
  const handleImageState = () => {
    setImage("");
  };
  
  return (
    <>
      <div className="container-wrapper">
      <div className="blog-top">
          <span className="blog-gradient-text">Write Your Thoughts!</span>
          <div className="nxt-btn">
          <button className="button" onClick={redirect}>Publish</button>
            
          </div>
        </div>
        <div className="cat-container">
          <h1>Categories</h1>
          <input type="text" className="cat-input" onChange={setCategory} placeholder="Enter your categories" />
        </div>
        <div className="thumbnailUpload">
          <label htmlFor="file" className="file-upload">
            
            {image && (
              <div className="upload-image">
                <img src= {`${image}`} alt="" />
                <button className="btn-remove" onClick={handleImageState}>
                  X
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
    </div>
        <UploadThumbanil setImage={setImage} image={image} setFile={setFile} setBlogImageUrl = {setBlogImageUrl} setBlogImageProvider = {setBlogImageProvider} />
      </div>
      <div className="unsplashContent">
          <StateContext.Provider value = {value}>
            {state  && (
                <UnSplash setFile = {setFile} setState = {setState} setBlogImageUrl = {setBlogImageUrl} setBlogImageProvider = {setBlogImageProvider}/>
            )}
            
          </StateContext.Provider>
        </div>
    </>
  );
};

export default UploadSection;
