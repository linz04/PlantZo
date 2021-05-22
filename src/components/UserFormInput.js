import React from "react";

const UserFormInput = ({ label, large, handleChange, ...otherProps }) => {
  return (
    <div className="flex justify-between items-center text-2xl ml-10">
      <label className="mr-10">{label}</label>
      <input
        className={`${
          large ? "h-56" : ""
        } w-9/12 bg-green-200 rounded-xl border-none p-2`}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default UserFormInput;
