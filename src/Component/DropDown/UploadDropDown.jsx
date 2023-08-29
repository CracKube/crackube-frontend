import React, { useState } from 'react';
import './UploadDropdown.css'; // Import the CSS file
import Upload from '../../Assets/uploadBtn.svg'
import { Link } from 'react-router-dom'
const UploadDropdown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="horizontal-dropdown-container">
      <button className="horizontal-dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : <Link ><img src= {Upload} alt="" />Upload</Link>}
      </button>
      {isOpen && (
        <div className="horizontal-dropdown-list">
          {options.map((option) => (
            <a
              key={option.value}
              href="#"
              className="horizontal-dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadDropdown;