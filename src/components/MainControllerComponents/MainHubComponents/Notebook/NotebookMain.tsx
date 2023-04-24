import { useNotebook } from "./useNotebook";
import "./notebookMainStyle.css";

export default function NotebookMain() {
  const { notes, addNewNote } = useNotebook();
  return (
    <div className="notebookMainContainer">
      <div className="notesContainer">{notes}</div>
      <button className="newNoteButton" onClick={addNewNote}>
        +
      </button>
    </div>
  );
}
