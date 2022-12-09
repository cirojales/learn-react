import React from "react";
import "./styles.css";

export default function Sidebar(props) {
  const notesElements = props.notes.map((note, index) => {
    return <h1 className="sidebar__note">Note {index + 1}</h1>;
  });
  console.log(props.notes);
  return (
    <section className="sidebar">
      <div className="sidebar__header">
        <h2 className="sidebar__header__heading">NOTES</h2>
        <button className="sidebar__header__btn" onClick={props.createNewNote}>
          +
        </button>
      </div>
      {notesElements}
    </section>
  );
}
