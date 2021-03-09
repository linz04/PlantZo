import React from "react";
import { Link, withRouter } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import "./nav-bar.styles.scss";

const NavBar = ({ currentUser, history, match }) => (
  <div className="nav-bar">
    <Link className="link-container" to="/">
      <div className="logo">LOGO</div>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Keluar
        </div>
      ) : (
        <>
          <Link className="option" to="/signin">
            Masuk
          </Link>
          <Link className="option active" to="/signup">
            Daftar
          </Link>
        </>
      )}
    </div>
  </div>
);

export default withRouter(NavBar);
