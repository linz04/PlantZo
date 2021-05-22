import React from "react";

const UserFormInput = ({
  label,
  large,
  clean,
  handleChange,
  ...otherProps
}) => {
  return (
    <div className="flex justify-between items-center text-2xl">
      {label ? <label className="mr-10">{label}</label> : null}
      <input
        className={`${large ? "h-56 w-full" : ""} ${
          clean ? "bg-gray-100" : "bg-green-200"
        } w-9/12 rounded-xl border-none p-2 text-3xl text-left`}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default UserFormInput;
