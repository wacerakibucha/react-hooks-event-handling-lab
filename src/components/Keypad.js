import React from "react";

function Keypad() {

  // Event handler for input change
  const handleChange = () => {
    console.log("Entering password...");
  };

  return (
    <div>
      <input type="password" onChange={handleChange} />
    </div>
  );
}

export default Keypad;
