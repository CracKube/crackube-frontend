import React from "react";
import Card from '../../Assets/giftCard.svg'
const WalletSystem = ({title, value, type}) => {
  return (
    <div className="points-cover">
      <p>{title}</p>
      <div className="value">
        <h1>{value && value}</h1>
        <p>{type != null ? type : <><img src= {Card} alt="" /></>}</p>
        
      </div>
      <div className="wallet-buttons">
        <button className="earn-points">Deposit</button>
        <button className="redeem">Withdraw</button>
      </div>
    </div>
  );
};

export default WalletSystem;
