import React, { useState } from "react";
import "./styles.css";

export default function Die(props) {
  const [isSelected, setIsSelected] = useState(false);

  function handleSelect() {
    setIsSelected((previousState) => !previousState);
  }

  return (
    <div
      onClick={handleSelect}
      className={`die ${isSelected ? "die--selected" : ""}`}
    >
      1
    </div>
  );
}
