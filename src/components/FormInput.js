import React from "react";

const FormInput = ({ handleChange, ...otherProps }) => (
  <div className="w-full">
    <input
      onChange={handleChange}
      {...otherProps}
      className="bg-gray-300 text-gray-800 placeholder-gray-800 p-4 w-full"
    />
  </div>
);

export default FormInput;
