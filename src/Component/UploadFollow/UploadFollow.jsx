import React, { useState } from 'react';

const UploadFollow = () => {
  const [val, setVal] = useState(0);
  const handleButton = () => {
    setVal(val+20)
  }
  return (
    <div style={{ position: 'relative', display : "flex", alignItems: "top" }}>
      <textarea 
      onKeyUp={handleButton}/>
      <div  style={{position: "relative", top : `${val}px` }}>Hello</div>
    </div>
  );
};
export default UploadFollow