import React from "react";

const Popup = ({ trigger, children }) =>
  trigger ? (
    <div className="fixed top-0 left-0 w-full h-screen bg-gray-800 flex justify-center items-center">
      <div className="relative p-32 w-full bg-gray-200">
        <button className="absolute top-3 right-3">X</button>
        {children}
      </div>
    </div>
  ) : (
    ""
  );

export default Popup;
