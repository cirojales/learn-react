import React from "react";
import "./styles.css";

export default function Board() {
  return (
    <main className="board">
      <h1 className="board__title">Tenzies</h1>
      <p className="board__instruction">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
    </main>
  );
}
