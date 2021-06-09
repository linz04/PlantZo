import React, { useState } from "react";
import Popup from "../components/Popup";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import MidHome from "../components/MidHome";
import TopHome from "../components/TopHome";
import UpHome from "../components/UpHome";
import ButHome from "../components/ButHome";
import CardItem from "../components/CardItem";

const HomePage = () => {
  const [signUpPopupVisible, setSignUpPopupVisible] = useState(false);
  const [signInPopupVisible, setSignInPopupVisible] = useState(false);
  
  const handleClickSignup = () => {
    setSignUpPopupVisible(!signUpPopupVisible);
  };

  const handleClickSignin = () => {
    setSignInPopupVisible(!signInPopupVisible);
  };

  return (
    <div>
    <div><TopHome /></div>
    <div><MidHome /></div>
    <div><UpHome /></div>
    <div><ButHome /></div>
    </div>
  );
};

export default HomePage;
