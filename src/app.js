import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/nav-bar/nav-bar.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import TeamPage from "./pages/team/team.component";
import ShopPage from "./pages/shop/shop.component";

import "./app.css";

const App = () => (
  <div className="app">
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/signin" component={SignInAndSignUpPage} />
      <Route path="/team" component={TeamPage} />
      <Route exact path="/shop" component={ShopPage} />
    </Switch>
  </div>
);

export default App;
