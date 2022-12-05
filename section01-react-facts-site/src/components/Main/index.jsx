import React from "react";
import "./styles.css";
import image from "../../assets/Main/reactjs.svg";

export default function Main(props) {
  return (
    <main
      className={props.darkMode ? "dark" : ""}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="main--title">Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}
