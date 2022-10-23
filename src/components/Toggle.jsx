import React from "react";

export const Toggle = ({ isOn, toggle, children }) => {
  function handleClick() {
    toggle(!isOn);
  }

  return (
    <div className="toggle-wrapper">
      <button className="cta" onClick={handleClick}>Quel temps fait-il?</button>
      {isOn && children}
    </div>
  );
};
