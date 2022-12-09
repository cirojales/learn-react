import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Split from "react-split";
import Editor from "./components/Editor";

export default function App() {
  const [notes, setNotes] = useState([
    // { id: 1, body: "Note 1" },
    // { id: 2, body: "Note 2" },
  ]);
  const [currentNoteId, setCurrentNoteId] = useState(notes[0] ?? "");
  console.log(currentNoteId);

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
          <Editor />
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
