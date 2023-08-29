import React, { useState } from 'react';
import './DropDown.css'; // Import the CSS file
import PropTop from '../../Assets/ProfileTop.svg'
const Dropdown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : <img className='prof-pic-nav'  src= {PropTop} alt="" />}
      </div>
      {isOpen && (
        <div className="dropdown-list">
          {options.map((option) => (
            <a
              key={option.value}
              href="#"
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
            <a href={option.route}>{option.label}</a> 
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;