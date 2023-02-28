import { useState, ChangeEvent } from "react";
import Note from "modules/MainControllerModules/MainHubModules/Notebook/SubModules/Note";

export function useNotebook() {
  const [notes, setNotes] = useState<JSX.Element[]>([]);

  function addNewNote() {
    const dateNow = Date.now();
    setNotes([
      ...notes,
      <Note
        key={"nt" + dateNow}
        noteID={"nt" + dateNow}
        handleDelete={deleteNote}
      />,
    ]);
  }

  function deleteNote(noteID: string) {
    setNotes((notes) => notes.filter((x) => x.props.noteID !== noteID));
  }

  return { addNewNote, notes };
}

export interface NoteProps {
  noteID: string;
  handleDelete: (noteID: string) => void;
}

export function useNote() {
  function scaleTextArea(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
  }

  return { scaleTextArea };
}
