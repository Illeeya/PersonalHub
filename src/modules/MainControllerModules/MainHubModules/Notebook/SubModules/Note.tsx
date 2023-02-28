import { NoteProps, useNote } from "logic/NotebookLogic/useNotebook";
import "style/mainControllerModules/mainHubModules/Notebook/notebookMainStyle.css";

export default function Note({
  noteID,
  noteText,
  handleDelete,
  handleChange,
}: NoteProps) {
  const { scaleTextArea } = useNote();
  return (
    <div className="noteContainer">
      <textarea
        value={noteText}
        maxLength={200}
        className="noteTextArea"
        onChange={(event) => {
          scaleTextArea(event), handleChange(noteID, event.target.value);
        }}
      ></textarea>
      <button onClick={() => handleDelete(noteID)} className="noteDeleteButton">
        DELETE
      </button>
    </div>
  );
}
