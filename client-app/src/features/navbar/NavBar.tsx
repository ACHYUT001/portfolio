import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar__container">
      <Link to="/" className="navbar__initials">
        <p>
          <strong>AU</strong>
        </p>
      </Link>
      <div className="navbar__pages">
        <Link to="/projects" className="navbar__page">
          <p>Projects</p>
        </Link>

        <Link to="/aboutme" className="navbar__page">
          <p>About Me</p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
