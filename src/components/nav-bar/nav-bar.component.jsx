import React from "react";

import { Link } from "react-router-dom";

import "./nav-bar.styles.scss";

const NavBar = () => (
  <div>
    <h1>Testing NavBar</h1>
    <Link to="/">Home (Logo)</Link>
    <Link to="/signin">Sign In & Sign Up</Link>
    <Link to="/team">Team</Link>
    <Link to="/shop">Shop</Link>
  </div>
);

export default NavBar;
