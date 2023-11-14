import React from "react";
import { useContext } from "react";
import { ImageContext } from "./UnSplash";
import Image from "./Image";
import "./unsplash.css";

const Images = ({ setFile, setState, setImage, setBlogImageUrl , setBlogImageProvider }) => {
  const { response, isLoading, searchImage } = useContext(ImageContext);
  return (
    <>
    <div className="images__container">
      <h1
        style={{
          marginTop: "1.5rem",
          fontSize: "1.5rem",
          lineHeight: "2rem",
          textDecoration: "underline",
        }}
      >
        Results for {searchImage || ""}
      </h1>
      <div className="flex-splash">
      <div
        className="unsplash-img"
        style={{
          display : "grid",
          marginTop: "2.5rem",
          marginBottom: "2.5rem",
          gap: "1rem",
          maxWidth: "80rem",

        }}
      >
        {response.map((data, key) => (
          <Image
            key={key}
            setFile={setFile}
            data={data}
            setState={setState}
            setImage={setImage}
            setBlogImageUrl = {setBlogImageUrl}
            setBlogImageProvider = {setBlogImageProvider}
            
          />
        ))}
      </div>
      </div>
      </div>
    </>
  );
};

export default Images;
