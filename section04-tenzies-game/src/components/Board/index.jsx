import React, { useState } from "react";
import Die from "../Die";
import "./styles.css";

export default function Board() {
  // const [isSelected, setIsSelected] = useState(false);
  // const [number, setNumber] = useState(getNumber());

  return (
    <main className="board">
      <h1 className="board__title">Tenzies</h1>
      <p className="board__instruction">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="board__dice-container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Die
          // number={number}
          // handleClick={handleClick}
          // isSelected={isSelected}
          />
        ))}
        {/* <Die handleClick={handleClick} isSelected={isSelected} />
        <Die handleClick={handleClick} isSelected={isSelected} /> */}
      </div>
      <button className="board__btn">Roll</button>
    </main>
  );
}
