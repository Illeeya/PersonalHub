import { NoteProps, useNote } from "logic/NotebookLogic/useNotebook";
import "style/mainControllerModules/mainHubModules/Notebook/notebookMainStyle.css";

export default function Note({ noteID, handleDelete }: NoteProps) {
  const { scaleTextArea } = useNote();
  return (
    <div className="noteContainer">
      <textarea
        value={noteID}
        maxLength={200}
        className="noteTextArea"
        onChange={scaleTextArea}
      ></textarea>
      <button onClick={() => handleDelete(noteID)} className="noteDeleteButton">
        DELETE
      </button>
    </div>
  );
}
