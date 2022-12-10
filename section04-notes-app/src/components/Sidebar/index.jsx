import React from "react";
import "./styles.css";

export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => {
    return (
      <div className="sidebar__note">
        <h1
          key={index}
          className={`sidebar__note__title ${
            note.id === props.currentNoteId ? "sidebar__note--selected" : ""
          }`}
          onClick={() => props.setCurrentNoteId(note.id)}
        >
          {note.body.split("\n")[0]}
        </h1>
        <button
          className="sidebar__note__btn"
          onClick={() => props.deleteNote(note.id)}
        >
          <span class="material-symbols-outlined">delete</span>
        </button>
      </div>
    );
  });
  return (
    <section className="sidebar">
      <div className="sidebar__header">
        <h2 className="sidebar__header__heading">NOTES</h2>
        <button className="sidebar__header__btn" onClick={props.createNewNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
