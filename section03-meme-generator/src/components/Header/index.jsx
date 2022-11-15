import React from "react";
import "./styles.css";
import trollface from "../../assets/Header/trollface.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="left-wrapper">
        <img className="header--trollface" src={trollface} alt="trollface" />
        <h2 className="header--title">Meme Generator</h2>
      </div>
      <div className="right-wrapper">
        <span className="header--text">React Course - Project 3</span>
      </div>
    </header>
  );
}
