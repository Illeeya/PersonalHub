import { useState, ChangeEvent } from "react";
import Note from "modules/MainControllerModules/MainHubModules/Notebook/SubModules/Note";

export function useNotebook() {
  const [notes, setNotes] = useState<JSX.Element[]>([]);

  function addNewNote() {
    setNotes([...notes, <Note />]);
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
