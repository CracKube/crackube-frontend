
import { addbutton } from '../Constants';
import { useState } from 'react';


export default function AddButton() {
  const [showPopup, setShowPopup] = useState(false);
  const listItems = ['Answer a Question', 'Post a Blog', 'Write a Code'];
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
            <div className='pad'>
             
                <div className='icon-style'>Answer a Question</div>
                <div className='icon-style'>Post a Blog</div>
                <div className='icon-style'>Write a Code</div>
              
            </div>
          </ul>
        </div>
      )}
    </>
  );
}