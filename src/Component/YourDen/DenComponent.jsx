import React from "react";
import { useState } from "react";
import "./YourDen.css";
import DenBar from "./DenBar";
import DenHistory from "./DenHistory";
import DenLike from "./DenLike";
import DenSaved from "./DenSaved";
const DenComponent = () => {
  const [clicked, setClicked] = useState(1);
  return (
    <div className="den-cover">
      <div>
        {clicked === 2 && (
          <>
            <DenHistory />
          </>
        )}
        {clicked === 3 && (
          <>
            <DenLike />
          </>
        )}
        {clicked === 4 && (
          <>
            <DenSaved />
          </>
        )}
      </div>

      <div className="den-right-bar">
        <DenBar clicked = {clicked} setClicked={setClicked} />
      </div>
    </div>
  );
};

export default DenComponent;
