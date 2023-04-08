import { useNotebook } from "./useNotebook";
import "./notebookMainStyle.css";

interface INotebookMain {
  addTask: (taskText: string) => void;
}
export default function NotebookMain({ addTask }: INotebookMain) {
  const { notes, addNewNote } = useNotebook(addTask);
  return (
    <div className="notebookMainContainer">
      <div className="notesContainer">{notes}</div>
      <button className="newNoteButton" onClick={addNewNote}>
        +
      </button>
    </div>
  );
}
