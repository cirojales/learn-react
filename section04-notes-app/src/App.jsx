import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Split from "react-split";

export default function App() {
  const [notes, setNotes] = useState([
    { id: 1, body: "Note 1" },
    { id: 2, body: "Note 2" },
  ]);

  function createNewNote() {
    setNotes((previousNotes) => {
      return [
        ...previousNotes,
        {
          id: previousNotes.length + 1,
          text: "Note" + previousNotes.length + 1,
        },
      ];
    });
  }
  return (
    <Split sizes={[30, 70]}>
      <Sidebar notes={notes} createNewNote={createNewNote} />
    </Split>
  );
}
