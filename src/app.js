import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/nav-bar/nav-bar.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInPage from "./pages/sign-in/sign-in.component";
import SignUpPage from "./pages/sign-up/sign-up.component";
import ShopPage from "./pages/shop/shop.component";

import { auth } from "./firebase/firebase.utils";

import "./app.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = () => {
      auth.onAuthStateChanged((user) => {
        this.setState({ currentUser: user });
      });
    };
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="app">
        <NavBar currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
