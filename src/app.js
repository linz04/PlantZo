import React, { useEffect } from "react";
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import UserPage from "./pages/UserPage";
import AboutUserPage from "./pages/AboutUserPage";
import ItemPage from "./pages/ItemPage";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentStatePage from "./pages/PaymentStatePage";
import SettingsPage from "./pages/SettingsPage";
import TestPage from "./pages/TestPage";

import NavHome from "./components/NavHome";
import PageContainer from "./components/PageContainer";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import { auth } from "./lib/firebase/firebase.utils";
import { selectCurrentUser } from "./redux/user/user.selectors";
import EditAddressPage from "./pages/EditAddressPage";

const App = () => {
  const currentUser = useSelector((state) => selectCurrentUser(state));

  const location = useLocation();

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(
      (user) => console.log("USER_TO_FIREBASE_OFF")
      // dispatch(setCurrentUser(user))
    );

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <PageContainer>
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
          path="/cart"
          render={() => (!currentUser ? <Redirect to="/" /> : <CartPage />)}
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

        <Route
          exact
          path="/user/about"
          render={() =>
            !currentUser ? <Redirect to="/" /> : <AboutUserPage />
          }
        />
        <Route
          path="/user/address"
          render={() =>
            !currentUser ? <Redirect to="/" /> : <EditAddressPage />
          }
        />
        <Route
          path="/state/"
          render={() =>
            !currentUser ? <Redirect to="/" /> : <PaymentStatePage />
          }
        />
        <Route
          path="/settings/"
          render={() => (!currentUser ? <Redirect to="/" /> : <SettingsPage />)}
        />

        <Route exact path="/test" component={TestPage} />
      </Switch>
      <Footer />
    </PageContainer>
  );
};

export default withRouter(App);
