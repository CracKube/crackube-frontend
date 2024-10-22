import React from "react";
import MajorComponent from "../MajorComponent";
import "./Store.css";
import { TopNavBar } from "../Constants";
import { useState } from "react";
import { createContext } from "react";
import MenuBar from "../MenuBar";
import Arrow from "../../Assets/SideArrow.svg";
import HiddenComponent from "../Pages/HiddenComponent";
import Store from "./Store";
import SharedComponents from "../SharedComponents";
export const ThemeContext = createContext(null)

const StoreComponent = () => {
  const [theme, setTheme] = useState("light")
    const [menu, setMenu] = useState(true);
  return (
    <SharedComponents>
      <div className="store-cover">
      <h1>Store</h1>

      <div className="gift-flex">
        <div className="gift-top-flex">
          <div className="gift-card-container"></div>
          <p>Gift Card</p>
        </div>
        <div className="gift-top-flex">
          <div className="gift-card-container"></div>
          <p>Gaming</p>
        </div>
        <div className="gift-top-flex">
          <div className="gift-card-container"></div>
          <p>PayPal</p>
        </div>
        <div className="gift-top-flex">
          <div className="gift-card-container"></div>
          <p>Fashion</p>
        </div>
      </div>
      <h1>Gift Card. <span className="span-s"> Get someone something special</span></h1>

      <div className="gift-card">
        <div>
          <div className="gift-card-container-b"></div>
          <div className="gift-details">
            <div>
              <p>Amazon Gift Card</p>
              <p>100-1000 Cash</p>
            </div>
            <div>
              <button>Buy</button>
            </div>
          </div>
        </div>
        <div>
          <div className="gift-card-container-b"></div>
          <div className="gift-details">
            <div>
              <p>Flipkart Gift Card</p>
              <p>100-1000 Cash</p>
            </div>
            <div>
              <button>Buy</button>
            </div>
          </div>
        </div>
      </div>
      <h1>Gaming. <span className="span-s">Level Up in style</span> </h1>
      <div className="gift-card">
        <div>
          <div className="gift-card-container-b"></div>
          <div className="gift-details">
            <div>
              <p>Stream Gift Card</p>
              <p>100-1000 Cash</p>
            </div>
            <div>
              <button>Buy</button>
            </div>
          </div>
        </div>
        <div>
          <div className="gift-card-container-b"></div>
          <div className="gift-details">
            <div>
              <p>Stream Gift Card</p>
              <p>100-1000 Cash</p>
            </div>
            <div>
              <button>Buy</button>
            </div>
          </div>
        </div>
      </div>
    <h1>PayPal. <span className="span-s"> Cash out right now </span></h1>
      <div className="gift-card">
        <div>
          <div className="gift-card-container-b"></div>
          <div className="gift-details">
            <div>
              <p>Paypal - US Dollars</p>
              <p>100-1000 Cash</p>
            </div>
            <div>
              <button>Buy</button>
            </div>
          </div>
        </div>
      </div>

      <h1>Fashion. <span className="span-s">Reinvent your wardrobe</span> </h1>

      <div className="gift-card">
        <div>
          <div className="gift-card-container-b"></div>
          <div className="gift-details">
            <div>
              <p>Mynthra Gift Card</p>
              <p>100-1000 Cash</p>
            </div>
            <div>
              <button>Buy</button>
            </div>
          </div>
        </div>
      </div>

    </div>
    </SharedComponents>
  );
};

export default StoreComponent;
