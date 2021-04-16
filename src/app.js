import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CheckoutPage from "./pages/CheckoutPage";
import UserPage from "./pages/UserPage";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: {
        id: 1,
        name: "Adjie",
      },
    };
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/shop"
            render={() => (!currentUser ? <Redirect to="/" /> : <ShopPage />)}
          />
          <Route
            exact
            path="/checkout"
            render={() =>
              !currentUser ? <Redirect to="/" /> : <CheckoutPage />
            }
          />
          <Route
            exact
            path="/user"
            render={() => (!currentUser ? <Redirect to="/" /> : <UserPage />)}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
