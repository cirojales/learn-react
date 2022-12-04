import React from "react";
import { useState } from "react";
import "./styles.css";
import memesData from "../../memesData";

export default function MemeGenerator() {
  const [meme, setMeme] = useState({
    topText: "Shut up",
    bottomText: "and take my money",
    randomImage: "https://i.imgflip.com/3si4.jpg",
  });

  function getMemeImage(event) {
    event.preventDefault();
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMeme((previousMeme) => ({
      ...previousMeme,
      topText: "",
      bottomText: "",
      randomImage: memesArray[randomNumber].url,
    }));
  }

  function handleTextChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setMeme((previousMeme) => ({
      ...previousMeme,
      [name]: value,
    }));
  }

  return (
    <main className="meme-generator">
      <form action="" className="meme-generator__form">
        <div className="meme-generator__input-wrapper">
          <input
            type="text"
            className="meme-generator__line"
            value={meme.topText}
            name="topText"
            onChange={handleTextChange}
          />
          <input
            type="text"
            className="meme-generator__line"
            value={meme.bottomText}
            name="bottomText"
            onChange={handleTextChange}
          />
        </div>
        <button onClick={getMemeImage} className="meme-generator__btn">
          {/* eslint-disable-next-line */}
          Get a new meme image
        </button>
      </form>
      <div className="meme-generator__image-wrapper">
        <img className="meme-generator__meme" alt="" src={meme.randomImage} />
        <span className="meme-generator__text meme-generator__text--top">
          {meme.topText}
        </span>
        <span className="meme-generator__text meme-generator__text--bottom">
          {meme.bottomText}
        </span>
      </div>
    </main>
  );
}
