import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Redirect,
  Route,
  Switch,
  useLocation,
  withRouter,
} from "react-router-dom";
import CollectionItemPage from "./components/CollectionItemPage";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import NavHome from "./components/NavHome";
import PageContainer from "./components/PageContainer";
import { auth } from "./lib/firebase/firebase.utils";
import AboutUserPage from "./pages/AboutUserPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import EditAddressPage from "./pages/EditAddressPage";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import PaymentStatePage from "./pages/PaymentStatePage";
import SettingsPage from "./pages/SettingsPage";
import ShopPage from "./pages/ShopPage";
import TestPage from "./pages/TestPage";
import UserPage from "./pages/UserPage";
import { selectCartItemsChecked } from "./redux/cart/cart.selectors";
import { selectCurrentUser } from "./redux/user/user.selectors";

const App = () => {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const cartItems = useSelector((state) => selectCartItemsChecked(state));
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

  useEffect(() => {
    if (currentUser) {
      axios
        .get("/")
        .then((res) => {
          console.log("SUCCESS");
        })
        .catch((e) => console.log("ABAIKAN"));
    }
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
          path="/collection"
          render={() =>
            !currentUser ? <Redirect to="/" /> : <CollectionItemPage />
          }
        />
        <Route
          exact
          path="/checkout"
          render={() =>
            !currentUser && cartItems.length === 0 ? (
              <Redirect to="/" />
            ) : (
              <CheckoutPage />
            )
          }
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
