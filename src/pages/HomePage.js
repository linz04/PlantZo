import React, { useState } from "react";
import { useSelector } from "react-redux";
import Popup from "../components/Popup";

import SignUp from "../components/SignUp";

import SignIn from "../components/SignIn";

const HomePage = () => {
  const [signUpPopupVisible, setSignUpPopupVisible] = useState(false);
  const [signInPopupVisible, setSignInPopupVisible] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleClickSignup = () => {
    setSignUpPopupVisible(!signUpPopupVisible);
  };

  const handleClickSignin = () => {
    setSignInPopupVisible(!signInPopupVisible);
  };

  return (
    currentUser || (
      <div className="flex flex-col items-center justify-center p-44 h-full space-y-2">
        <h1 className="text-2xl">Testing Popup</h1>

        <button
          onClick={handleClickSignup}
          className="w-64 p-4 bg-gray-800 text-gray-100 uppercase"
        >
          signup
        </button>

        <button
          onClick={handleClickSignin}
          className="w-64 p-4 bg-gray-800 text-gray-100 uppercase"
        >
          login
        </button>

        <Popup trigger={signUpPopupVisible} handleClick={handleClickSignup}>
          <SignUp />
        </Popup>

        <Popup trigger={signInPopupVisible} handleClick={handleClickSignin}>
          <SignIn />
        </Popup>
      </div>
    )
  );
};

export default HomePage;
