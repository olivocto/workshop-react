import React from "react";

const InputText = ({ value, onChange}) => {
  return (
    <div className="inputField">
      <label htmlFor="title">title</label>
      <input id="title" type="text" name="title" required value={value} onChange={onChange}/>
    </div>
  );
};

export default InputText;
