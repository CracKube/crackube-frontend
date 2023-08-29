import React, { useState } from "react";
import { Link } from "react-router-dom";
import Upload from "../../Assets/uploadBtn.svg";
import UnSplash from "../UnSplash/UnSplash";
import { createContext } from "react";
export const StateContext = createContext();
const DropDownSplash = ({ options, image, setImage, setFile }) => {

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
      <button
        className="horizontal-dropdown-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {
          <Link>
            <img src={Upload} alt="" />
            Upload
          </Link>
        }
      </button>
      {isOpen && (
        <div className="horizontal-dropdown-list-sp">
          {options.map((option) => (
            <a
              key={option.value}
              href="#"
              className="horizontal-dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option.value}
            </a>
          ))}
        </div>
      )}
      {selectedOption.value === "Upload" && (
        <div>
          <label htmlFor="file" className="file-upload">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleImageChange}
              accept=".jpg, .jpeg, .png"
            />
            {image && (
              <div className="upload-image">
                <img src={`data:image/png;base64,${image}`} alt="image" />
                <button className="btn-remove" onClick={handleImageState}>
                  X
                </button>
              </div>
            )}
            {!image && (
              <div className="file-input">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                Upload
              </div>
            )}
          </label>
        </div>
      )}

      {selectedOption.value === "UnSplash" && (
        <div className="unsplashContent">
          <StateContext.Provider value = {value}>
            {state  && (
                <UnSplash setFile = {setFile} setState = {setState} setImage = {setImage}/>
            )}
            {!state &&  (
                  <label htmlFor="file" className="file-upload">
                      <input
                        type="file"
                        id="file"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                        accept=".jpg, .jpeg, .png"
                      />
                      {image && (
                        <div className="upload-image">
                          <img src={image} alt="image" />
                          <button className="btn-remove" onClick={handleStateAndImage}>
                            X
                          </button>
                        </div>
                      )}
                      {!image && <DropDownSplash/>}
                    </label>
             
              )
            }
          </StateContext.Provider>
        </div>
      )}
    </div>
  );
};

export default DropDownSplash;
