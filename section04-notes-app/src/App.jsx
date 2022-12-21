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

  // console.log(notes[0]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
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
    return notes.find((note) => note.id === currentNoteId) ?? "";
  }

  function deleteNote(noteId) {
    setNotes((previousNotes) => {
      return previousNotes.filter((note) => note.id !== noteId);
    });
    setCurrentNoteId(() => {
      return notes.length === 1
        ? ""
        : notes[0].id === currentNoteId
        ? notes[1].id
        : notes[0].id;
    });
  }

  return (
    <>
      {notes.length > 0 ? (
        <Split sizes={[25, 75]} className="split" gutterSize={0}>
          <Sidebar
            notes={notes}
            createNewNote={createNewNote}
            setCurrentNoteId={setCurrentNoteId}
            currentNoteId={currentNoteId}
            deleteNote={deleteNote}
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
