import React from "react";

import Popup from "./components/Popup";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      signUpPopupVisible: false,
      signInPopupVisible: false,
    };
  }

  handleClickSignup = () => {
    this.setState((prevState) => ({
      signUpPopupVisible: !prevState.signUpPopupVisible,
    }));
  };

  handleClickSignin = () => {
    this.setState((prevState) => ({
      signInPopupVisible: !prevState.signInPopupVisible,
    }));
  };

  render() {
    const { signUpPopupVisible, signInPopupVisible } = this.state;
    return (
      <div className="flex flex-col items-center justify-center p-44 h-full space-y-2">
        <h1 className="text-2xl">Testing Popup</h1>
        <button
          onClick={this.handleClickSignup}
          className="w-64 p-4 bg-gray-800 text-gray-100 uppercase"
        >
          signup
        </button>
        <button
          onClick={this.handleClickSignin}
          className="w-64 p-4 bg-gray-800 text-gray-100 uppercase"
        >
          login
        </button>
        <Popup
          trigger={signUpPopupVisible}
          handleClick={this.handleClickSignup}
        >
          <SignUp />
        </Popup>

        <Popup
          trigger={signInPopupVisible}
          handleClick={this.handleClickSignin}
        >
          <SignIn />
        </Popup>
      </div>
    );
  }
}

export default App;
