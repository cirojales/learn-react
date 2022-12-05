import React from "react";
import "./styles.css";
import logo from "../../assets/Navbar/reactjs-icon.svg";

export default function Navbar(props) {
  return (
    <nav
      onClick={props.toggleDarkMode}
      className={props.darkMode ? "dark" : ""}
    >
      <div className="nav--container">
        <img src={logo} alt="" />
        <span className="nav--react-facts">ReactFacts</span>
      </div>
      <span className="nav--text">React Course - Project 1</span>
    </nav>
  );
}
