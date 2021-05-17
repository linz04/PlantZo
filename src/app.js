import React, { useEffect } from "react";
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  useLocation,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CheckoutPage from "./pages/CheckoutPage";
import UserPage from "./pages/UserPage";
import ItemPage from "./pages/ItemPage";
import NavHome from "./components/NavHome";
import PageContainer from "./components/PageContainer";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import { auth } from "./lib/firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

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

  console.log(currentUser);

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
    </PageContainer>
  );
};

export default withRouter(App);
