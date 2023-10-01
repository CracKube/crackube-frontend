import React from "react";
import "./Wallet.css";

import WalletSystem from "./WalletSystem";
import RewardSystem from "./RewardSystem";
import Search from "../../Assets/transSearch.svg";
import Calendar from "../../Assets/calendar.svg";
import Arrow from "../../Assets/arrowTrans.svg";
const WalletComponent = () => {
  return (
    <div className="wallet-cover">
      <div className="wallet-title">
        <p>Your Wallet</p>
      </div>
      <div className="system-flex">
        <WalletSystem title={"Your CK Points"} value={2300} type={"CK"} />
        <WalletSystem title={"Your Money"} value={2300} type={"INR"} />
        <RewardSystem title={"Reward System"} />
      </div>

      <div className="transaction-cover">
        <div className="trans-flex">
          <h1>Transaction History</h1>
          <div>
            <img src={Search} alt="" className="search-trans" />
            <input
              type="text"
              className="transaction-search"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="trans-bar">
          <div className="trans-options">
            <div className="option">
              <p>All</p>
            </div>
            <div className="option">
              <p>CK Points</p>
            </div>
            <div className="option">
              <p>Money</p>
            </div>
            <div className="option">
              <p>Received</p>
            </div>
            <div className="option">
              <p>Sent</p>
            </div>
            <div className="option">
              <p>Withdraw</p>
            </div>
          </div>
          <div className="right-option-cover">          
          <div className="right-option">
            <img src={Calendar} alt="" />
            <p>Past 90 Days</p>
            <img src={Arrow} alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletComponent;
