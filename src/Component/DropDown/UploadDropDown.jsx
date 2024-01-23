import React, { useState } from "react";
import "./UploadDropdown.css"; // Import the CSS file
import Upload from "../../Assets/uploadBtn.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavAsset from "../../Assets/NavAsseet.svg";
const UploadDropdown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    console.log(option.route);
    window.location.href = `${option.route}`;
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="horizontal-dropdown-container">
      <div>
        <button
          className="horizontal-dropdown-button"
          onClick={() => setIsOpen(!isOpen)}
          onBlur={() => setIsOpen(false)}
        >
          <img src={Upload} alt="" />
          Upload
          <img src={NavAsset}></img>
        </button>
      </div>
      {isOpen && (
        <div className="horizontal-dropdown-list">
          {options.map((option) => (
            <NavLink
              to={option.route}
              key={option.value}
              className="horizontal-dropdown-option"
            >
              {option.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadDropdown;
