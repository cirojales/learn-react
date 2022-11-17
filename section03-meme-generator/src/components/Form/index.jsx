import React from "react";
import "./styles.css";

export default function Form() {
  return (
    <form action="" className="form">
      <div className="inputs-container">
        <input type="text" className="line form--top-line" />
        <input type="text" className="line form--bottom-line" />
      </div>
      <a className="link" href="">
        Get a new meme image
      </a>
    </form>
  );
}
