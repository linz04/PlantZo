import React, { useState } from "react";
import ButHome from "../components/ButHome";
import MidHome from "../components/MidHome";
import TopHome from "../components/TopHome";
import UpHome from "../components/UpHome";

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
      <div>
        <TopHome />
      </div>
      <div>
        <MidHome />
      </div>
      <div>
        <UpHome />
      </div>
      <div>
        <ButHome />
      </div>
    </div>
  );
};

export default HomePage;
