import React from "react";
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  useLocation,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CheckoutPage from "./pages/CheckoutPage";
import UserPage from "./pages/UserPage";
import ItemPage from "./pages/ItemPage";
import NavHome from "./components/NavHome";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();
  console.log(location);
  console.log(location.pathname);

  const currentUser = {
    id: 1,
    name: "Adjie",
  };

  return (
    <div>
      {location.pathname === "/" ? <NavHome /> : <Nav />}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/shop"
          render={() => (!currentUser ? <Redirect to="/" /> : <ShopPage />)}
        />
        <Route
          exact
          path="/shop/:itemId"
          render={() => (!currentUser ? <Redirect to="/" /> : <ItemPage />)}
        />
        <Route
          exact
          path="/checkout"
          render={() => (!currentUser ? <Redirect to="/" /> : <CheckoutPage />)}
        />
        <Route
          exact
          path="/user"
          render={() => (!currentUser ? <Redirect to="/" /> : <UserPage />)}
        />
      </Switch>
      <Footer />
    </div>
  );
};

export default withRouter(App);
