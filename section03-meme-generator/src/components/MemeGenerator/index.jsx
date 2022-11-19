import React from "react";
import "./styles.css";
import meme from "../../assets/meme.svg";

export default function MemeGenerator() {
  function test(e) {
    e.preventDefault();
    console.log(777);
  }
  return (
    <main className="meme-generator">
      <form action="" className="meme-generator__form">
        <div className="meme-generator__wrapper">
          <input type="text" className="meme-generator__line" />
          <input type="text" className="meme-generator__line" />
        </div>
        {/* eslint-disable-next-line */}
        <button className="meme-generator__btn" onClick={test}>
          Get a new meme image
        </button>
      </form>
      <img className="meme-generator__meme" src={meme} alt="" />
    </main>
  );
}
