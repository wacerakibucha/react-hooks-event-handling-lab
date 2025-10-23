import React from "react";

function EyesOnMe() {

  // Event handlers for focus and blur
  const handleFocus = () => {
    console.log("Good!");
  };

  const handleBlur = () => {
    console.log("Hey! Eyes on me!");
  };

  return (
    <div>
      <button onFocus={handleFocus} onBlur={handleBlur}>
        Eyes on me
      </button>
    </div>
  );
}

// Export the component
export default EyesOnMe;

