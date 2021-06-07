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
      <div className="flex justify-end">
        {label ? <div className="flex justify-end">{label}</div> : null}
      </div>
      <input
        className={`${large ? "h-56 w-full" : ""} ${
          clean ? "bg-gray-100" : "bg-green-400"
        } w-9/12 rounded-xl border-none p-2 text-3xl text-left text-center`}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default UserFormInput;
