import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ isLittle, label, handleChange, ...otherProps }) => (
  <div className="group">
    <input
      className={`${isLittle ? "little" : ""} form-input`}
      {...otherProps}
      onChange={handleChange}
    />
    <label>{label}</label>
  </div>
);

export default FormInput;
