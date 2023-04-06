import { useNotebook } from "components/MainControllerComponents/MainHubComponents/Notebook/useNotebook";
import { AddTaskProp } from "components/MainControllerComponents/useMainHub";

export default function NotebookMain({ addTask }: AddTaskProp) {
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
