import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar__homeLink" to="/">
        TasteBuddy
      </Link>
      <div></div>
    </div>
  );
};

export default Navbar;
