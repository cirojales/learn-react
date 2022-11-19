import React from "react";
import { useState } from "react";
import "./styles.css";
import memesData from "../../memesData";

export default function MemeGenerator() {
  const [url, setUrl] = useState("https://i.imgflip.com/3si4.jpg");
  const [topLine, setTopLine] = useState("Shut up");
  const [bottomLine, setBottomLine] = useState("and take my money");

  function getMemeImage(e) {
    // e.preventDefault();
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    return memesArray[randomNumber].url;
  }

  function getInputValue(e) {
    e.preventDefault();
    const topLineValue = e.target.children[0].childNodes[0].value;
    const bottomLineValue = e.target.children[0].childNodes[1].value;
    setTopLine(topLineValue);
    setBottomLine(bottomLineValue);
  }

  return (
    <main className="meme-generator">
      <form onSubmit={getInputValue} action="" className="meme-generator__form">
        <div className="meme-generator__input-wrapper">
          <input
            type="text"
            defaultValue={topLine}
            className="meme-generator__line"
          />
          <input
            type="text"
            defaultValue={bottomLine}
            className="meme-generator__line"
          />
        </div>
        <button
          onClick={() => setUrl(getMemeImage())}
          // type="submit"
          className="meme-generator__btn"
        >
          {/* eslint-disable-next-line */}
          Get a new meme image
        </button>
      </form>
      <div className="meme-generator__image-wrapper">
        <img className="meme-generator__meme" alt="" src={url} />
        <span className="meme-generator__top-line">{topLine}</span>
        <span className="meme-generator__bottom-line">{bottomLine}</span>
      </div>
    </main>
  );
}
