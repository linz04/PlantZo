import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import SharePopup from "./SharePopup";

const Nav = ({ history, match, location }) => {
  const [popupVisibility, setPopupVisibility] = useState(false);

  const handleClickPopupShare = () => {
    setPopupVisibility(!popupVisibility);
  };

  return (
    <div className="flex justify-between items-center h-24 bg-green-900">
      <div
        className="flex ml-8 cursor-pointer"
        onClick={() => history.push("/")}
      >
        <img className="w-11 h-11" src="/images/icons/logo.png" alt="Logo" />

        <span className="text-gray-100 text-3xl">PlantZo</span>
      </div>

      <div className="flex justify-center items-center rounded-full">
        <input className="-mr-12 p-4 rounded-full border-none focus:outline-none" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <div className="flex">
        <div
          className="w-14 mx-4 flex justify-center items-center cursor-pointer"
          onClick={() => history.push("/shop")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              location.pathname === "/shop" ? "text-gray-800" : "text-gray-100"
            } h-16 w-16`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>

        <div
          className="w-14 mx-4 flex justify-center items-center cursor-pointer"
          onClick={() => history.push("/cart")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              location.pathname === "/cart" ? "text-gray-800" : "text-gray-100"
            } h-16 w-16`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>

        <div
          className="w-14 mx-4 flex justify-center items-center cursor-pointer"
          onClick={() => history.push("/user")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              location.pathname === "/user" ? "text-gray-800" : "text-gray-100"
            } h-16 w-16`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div
          className="w-14 mx-4 flex flex-col justify-between items-center relative"
          onClick={handleClickPopupShare}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-100 h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          <div className="absolute top-20">
            {popupVisibility ? <SharePopup /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Nav);
