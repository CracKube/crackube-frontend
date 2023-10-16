import React from "react";
import logo from "../../src/Assets/CK_LOGO.svg";

function Logo({ cssClass }) {
  return (
      <div className= "logo">
        <img src={logo} alt="logo" />
        <h1>CracKube</h1>
      </div>
      

    // method to sum of two numbers
  );
}

//default prop
Logo.defaultProps = {
  cssClass: "logo",
};
export default Logo;
