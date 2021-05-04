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
import PageContainer from "./components/PageContainer";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = ({ user = {} }) => {
  const location = useLocation();
  const { userName = "Anonymous" } = user;

  return (
    <PageContainer>
      {location.pathname === "/" ? <NavHome /> : <Nav />}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/shop"
          render={() => (!user ? <Redirect to="/" /> : <ShopPage />)}
        />
        <Route
          exact
          path="/shop/:itemId"
          render={() => (!user ? <Redirect to="/" /> : <ItemPage />)}
        />
        <Route
          exact
          path="/checkout"
          render={() => (!user ? <Redirect to="/" /> : <CheckoutPage />)}
        />
        <Route
          exact
          path="/user"
          render={() => (!user ? <Redirect to="/" /> : <UserPage />)}
        />
      </Switch>
      <Footer />
    </PageContainer>
  );
};

export default withRouter(App);
