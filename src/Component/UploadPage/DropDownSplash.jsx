import React, { useState } from "react";
import { Link } from "react-router-dom";
import Upload from "../../Assets/uploadBtn.svg";
import UnSplash from "../UnSplash/UnSplash";
import { createContext } from "react";
export const StateContext = createContext();
const DropDownSplash = ({ options, image, setImage, setFile, setBlogImageUrl , setBlogImageProvider  }) => {

  const [state, setState] = useState(true);
  const value = {
    state,
    setState
  }
  const [selectedOption, setSelectedOption] = useState("UnSplash");
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const handleStateAndImage = () => {
    setImage("")
    setState(true)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file)
    
    if (file) {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      setFile(file);
      if (allowedTypes.includes(file.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          var dataURL = reader.result;
          setImage(dataURL.split(",")[1]);
          console.log(image)
        };
       
      } else {
        setImage("");
      }
    }
  };
  const handleImageState = () =>{
    setState(true)
    setImage("");
  }
  console.log(state)
  return (
    <div className="horizontal-dropdown-container-sp">
        <div className="unsplashContent">
          <StateContext.Provider value = {value}>
            {state  && (
                <UnSplash setFile = {setFile} setState = {setState} setImage = {setImage} setBlogImageUrl = {setBlogImageUrl} setBlogImageProvider = {setBlogImageProvider}/>
            )}
            {!state &&  (
                <div>
                    {image && (
                        <div className="upload-image">
                          <img src={image} alt="image" />
                          <button className="btn-remove" onClick={handleStateAndImage}>
                            X
                          </button>
                        </div>
                      )}
                      {!image && <DropDownSplash/>}
                </div>
                      
             
              )
            }
          </StateContext.Provider>
        </div>
    </div>
  );
};

export default DropDownSplash;
