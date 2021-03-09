import React from "react";

import "./custom-checkbox.component";

const CustomCheckbox = ({ children, handleClick, ...otherProps }) => (
  <div className="group">
    <input
      type="checkbox"
      className="checkbox"
      onClick={handleClick}
      {...otherProps}
    />
    {children}
  </div>
);

export default CustomCheckbox;
