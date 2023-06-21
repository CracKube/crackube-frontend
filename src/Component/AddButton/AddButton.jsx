
import { addbutton } from '../Constants';
import { useState } from 'react';


// add two numbers


export default function AddButton() {
  const [showPopup, setShowPopup] = useState(false);
  const listItems = ['Item 1', 'Item 2', 'Item 3'];
  const buttonHandler = ('click', () => {
    const button = document.querySelector(".addbutton");
    if (!button) return;
    button.classList.add('rotate-animation');
    setShowPopup(!showPopup);
    setTimeout(() => {
      button.classList.remove('rotate-animation');
    }, 1000); // Remove the class after the animation duration (1 seconds)
  });
  return (

    <>
      <button className='addbutton'
        onClick={buttonHandler}>
        <img src={addbutton} alt="" />
      </button>
      {showPopup && (
        <div className="popup">
          <ul>
            <div>
              {listItems.map((item, index) => (
                <div className='icon-style' key={index}>{item}</div>
              ))}
            </div>
          </ul>
        </div>
      )}
    </>
  );
}