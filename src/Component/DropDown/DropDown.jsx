import React, { useState } from 'react';
import './DropDown.css'; // Import the CSS file
import { Link } from 'react-router-dom'
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
      <div className="dropdown-button" onClick={() => setIsOpen(!isOpen)} >
       <Link><img className='prof-pic-nav'  src= {PropTop} alt="" /></Link>
      </div>
      {isOpen && (
        <div className="dropdown-list">
          {options.map((option) => (
            <Link
              key={option.value}
              to=  {option.route}
              className="dropdown-option"
            >
            <Link to={option.route} >{option.label}</Link> 
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;