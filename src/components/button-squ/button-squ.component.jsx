import React from "react";

import "./button-squ.styles.scss";

const ButtonSqu = ({ children, ...otherProps }) => (
  <button className="button-squ" {...otherProps}>
    {children}
  </button>
);

export default ButtonSqu;
