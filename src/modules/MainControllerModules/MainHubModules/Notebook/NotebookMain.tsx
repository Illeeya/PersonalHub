import { useNotebook } from "logic/NotebookLogic/useNotebook";

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