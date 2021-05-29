import React from "react";

const LabelContainer = ({ children, ...otherProps }) => (
  <div
    className="flex items-center bg-gray-100 p-6 m-2 text-3xl"
    {...otherProps}
  >
    {children}
  </div>
);

export default LabelContainer;
