import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Split from "react-split";
import Editor from "./components/Editor";
import { nanoid } from "nanoid";

export default function App() {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("notes")) ?? []
  );

  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      // id: notes.length + 1,
      body: "# Type your markdown note's title here",
    };
    setNotes((previousNotes) => {
      return [...previousNotes, newNote];
    });
    setCurrentNoteId(newNote.id);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function updateNote(text) {
    setNotes((previousNotes) => {
      let newNotes = previousNotes.filter((note) => note.id !== currentNoteId);
      return [{ id: currentNoteId, body: text }, ...newNotes];
    });
  }

  function findCurrentNote() {
    return notes.find((note) => note.id === currentNoteId);
  }

  return (
    <>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} className="split">
          <Sidebar
            notes={notes}
            createNewNote={createNewNote}
            setCurrentNoteId={setCurrentNoteId}
            currentNoteId={currentNoteId}
          />
          <Editor updateNote={updateNote} currentNote={findCurrentNote()} />
        </Split>
      ) : (
        <div className="no-notes">
          <h2>You have no notes</h2>
          <button onClick={createNewNote} className="first-note-btn">
            Create one now
          </button>
        </div>
      )}
    </>
  );
}
