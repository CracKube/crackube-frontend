import React, { useContext } from "react";
import "./unsplash.css";
import useAxios from "../hooks/useAxios";
import DropDownSplash from "../UploadPage/DropDownSplash";
import { useState } from "react";
import { createContext } from "react";
import { StateContext } from "../UploadPage/DropDownSplash";

const Image = ({ data, setFile, setState, setImage, setBlogImageUrl, setBlogImageProvider }) => {
  const handleUnSplash = (e) => {
    console.log("Hello from handler");
    setBlogImageProvider("unsplash");
    setBlogImageUrl(data.urls.regular);
    setFile(data.urls.regular);
    setImage(data.urls.regular);
    setState(true);
    
    const file = data.urls.regular;
  };
  return (
    <div
      className="unsplash__img"
      style={{ objectFit: "cover", borderRadius: "0.5rem", width: "100%" , cursor: "pointer" }}
      onClick={(e) => handleUnSplash(e)}
    >
      <a>
        <img className="" src={data.urls.regular} alt={data.alt_description} />
      </a>
    </div>
  );
};

export default Image;
