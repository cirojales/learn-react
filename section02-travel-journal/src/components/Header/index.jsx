import React from "react";
import headerIcon from "../../assets/Header/header-icon.svg";
import "./styles.css";

export default function Header() {
  return (
    <nav>
      <img className="nav--icon" src={headerIcon} alt="icon" />
      <span className="nav--text">my travel journal.</span>
    </nav>
  );
}
