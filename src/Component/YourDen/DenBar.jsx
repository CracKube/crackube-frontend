import React from "react";
import { useState } from "react";
import "./YourDen.css";
import Overall from '../../Assets/OVERALL-DEN.svg'
import History from '../../Assets/HISTORY-DEN.svg'
import Like from '../../Assets/LIKE-DEN.svg'
import Saved from '../../Assets/BK-DEN.svg'

const DenBar = ({clicked , setClicked}) => {
  return (
    <div className="den-right">
      <div >
        <img src="" alt="profile photo" />
        <p>User Name</p>
      </div>
      <div onClick={() => setClicked(1)} className= {clicked === 1 ? 'den-click': 'den-p'}>
        <img src= {Overall} alt="" />
        <p>Overall</p>
      </div>
      <div onClick={() => setClicked(2)} className= {clicked === 2 ? 'den-click': 'den-p'}>
        <img src= {History} alt="" />
        <p>History</p>
      </div>
      <div onClick={() => setClicked(3)} className= {clicked === 3 ? 'den-click': 'den-p'}>
        <img src= {Like} alt="" />
        <p>Liked</p>
      </div>
      <div onClick={() => setClicked(4)} className= {clicked === 4 ? 'den-click': 'den-p'}>
        <img src= {Saved} alt="" />
        <p>Saved List</p>
      </div>
    </div>
  );
};

export default DenBar;
