import React from "react";
import "./styles.css";
import logo from "../../assets/Navbar/airbnb-logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo-wrapper">
        <img src={logo} alt="" />
      </div>
    </nav>
  );
}
