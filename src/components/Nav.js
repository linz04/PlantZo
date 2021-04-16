import React from "react";

const Nav = () => (
  <div className="flex justify-between items-center h-10 bg-green-800">
    <div className="ml-4">Logo</div>

    <div className="flex justify-center items-center rounded-full">
      <input className="-mr-12 p-1 rounded-full border-none focus:outline-none" />

      <span>Kaca</span>
    </div>

    <div className="flex">
      <div className="bg-gray-100 w-14 m-1 flex justify-center items-center">
        Rumah
      </div>

      <div className="bg-gray-100 w-14 m-1 flex justify-center items-center">
        Cart
      </div>

      <div className="bg-gray-100 w-14 m-1 flex justify-center items-center">
        User
      </div>

      <div className="bg-gray-100 w-14 m-1 flex justify-center items-center">
        Share
      </div>
    </div>
  </div>
);

export default Nav;
