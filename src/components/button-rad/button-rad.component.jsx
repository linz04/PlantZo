import React from "react";

import "./button-rad.styles.scss";

const ButtonRad = ({ children, ...otherProps }) => (
  <button className="button-rad" {...otherProps}>
    {children}
  </button>
);

export default ButtonRad;
