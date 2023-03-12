import { useNotebook } from "logic/NotebookLogic/useNotebook";
import { AddTaskProp } from "logic/TaskListLogic/useTaskList";

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
