import React from "react";

const InputTextArea = ({value, onChange}) => {
  return (
    <div className="inputField">
      <label htmlFor="body">body</label>
      <textarea id="body" name="body" required value={value} onChange={onChange}/>
    </div>
  );
};

export default InputTextArea;
