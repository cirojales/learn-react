import React from "react";
import "./styles.css";
import meme from "../../assets/meme.svg";

export default function MemeGenerator() {
  return (
    <section className="meme-generator">
      <form action="" className="form">
        <div className="inputs-container">
          <input type="text" className="line form--top-line" />
          <input type="text" className="line form--bottom-line" />
        </div>
        {/* eslint-disable-next-line */}
        <a className="link" href="">
          Get a new meme image
        </a>
      </form>
      <img className="meme" src={meme} alt="" />
    </section>
  );
}
