import React from "react";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="">
    <input onChange={handleChange} {...otherProps} />
    <label>{label}</label>
  </div>
);

export default FormInput;
