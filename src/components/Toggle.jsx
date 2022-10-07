import React from "react";

export const Toggle = ({ isOn, toggle, children }) => {
  function handleClick() {
    toggle(!isOn);
  }

  return (
    <div>
      <button onClick={handleClick}>Quel temps fait-il?</button>
      {isOn && children}
    </div>
  );
};
