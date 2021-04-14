import React from "react";

const Popup = ({ trigger, handleClick, children }) => {
  return trigger ? (
    <div className="fixed top-0 left-0 w-full h-screen bg-gray-800 flex justify-center items-center">
      <div className="relative p-32 w-full bg-gray-200">
        <button onClick={handleClick} className="absolute top-6 right-6">
          X
        </button>
        {children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
