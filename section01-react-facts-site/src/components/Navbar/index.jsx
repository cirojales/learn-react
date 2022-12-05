import React from "react";
import "./styles.css";
import logo from "../../assets/Navbar/reactjs-icon.svg";

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <div className="nav--container">
        <img src={logo} alt="" />
        <span className="nav--react-facts">ReactFacts</span>
      </div>
      {/* <span className="nav--text">React Course - Project 1</span> */}
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
