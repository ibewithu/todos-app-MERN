import React from "react";
import { Link } from "react-router-dom";
import logo from "../../resources/icons/app-icon.png";
import "./header.css";

const Header = () => {
  return (
    <div className="nav-bar">
      <div className="real">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "black" }}
          className="logo-content"
        >
          <img src={logo} alt="T"></img>
          <div className="column logo-name">
            <h5>Todo-maker</h5>
            <h6>handle todos with ease</h6>
          </div>
        </Link>

        <div className="nav-button-content">
          <Link to="/">Home</Link>
          <Link to="/get-started" className="get-started">
            Get Started
          </Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
