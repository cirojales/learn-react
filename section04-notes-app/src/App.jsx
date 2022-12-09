import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Split from "react-split";
import Editor from "./components/Editor";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState(notes[0] ?? "");
  console.log(notes);

  function createNewNote() {
    const newNote = {
      id: notes.length + 1,
      body: "# Type your markdown note's title here",
    };
    setNotes((previousNotes) => {
      return [...previousNotes, newNote];
    });
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    setNotes((previousNotes) =>
      previousNotes.map((note) => {
        return note.id === currentNoteId ? { ...note, body: text } : note;
      })
    );
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
