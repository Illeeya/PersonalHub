import { useState, ChangeEvent, useEffect } from "react";
import Note from "./Note";

export function useNotebook(addTask: (taskText: string) => void) {
  const [notesObjects, setNotesObjects] = useState<
    { noteID: string; noteText: string }[]
  >(JSON.parse(localStorage.getItem("personalHubNotes") || "[]"));
  const [notes, setNotes] = useState<JSX.Element[]>([]);

  useEffect(() => {
    updateNotes();
  }, [notesObjects]);

  function updateNotes() {
    setNotes((notes) =>
      notesObjects.map((noteObject) => (
        <Note
          key={noteObject.noteID}
          noteID={noteObject.noteID}
          noteText={noteObject.noteText}
          handleDelete={deleteNote}
          handleChange={updateNote}
          addTask={() => addTask(noteObject.noteText)}
        />
      ))
    );

    saveNotesToLocalStorage();
  }

  function saveNotesToLocalStorage() {
    const notesObjects_ = notesObjects.filter(
      (note) => note.noteText.trim() !== ""
    );
    localStorage.setItem("personalHubNotes", JSON.stringify(notesObjects_));
  }

  function addNewNote() {
    if (!notesObjects.find((note) => note.noteText.trim() === "")) {
      const dateNow = Date.now();

      setNotesObjects((notesObjects) => [
        ...notesObjects,
        { noteID: "nt" + dateNow, noteText: "" },
      ]);
    }
  }

  function updateNote(noteID: string, noteText: string) {
    const noteToUpdate = notesObjects.find((note) => note.noteID === noteID);
    noteToUpdate!.noteText = noteText;
    setNotesObjects([...notesObjects]);
  }

  function deleteNote(noteID: string) {
    setNotesObjects((notes) => notes.filter((note) => note.noteID !== noteID));
  }

  return { addNewNote, notes };
}

export function useNote() {
  function scaleTextArea(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
  }

  return { scaleTextArea };
}
