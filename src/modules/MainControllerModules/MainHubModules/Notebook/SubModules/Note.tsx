import { useNote } from "logic/NotebookLogic/useNotebook";
import "style/mainControllerModules/mainHubModules/Notebook/notebookMainStyle.css";

export default function Note() {
  const { scaleTextArea } = useNote();
  return (
    <div className="noteContainer">
      <textarea
        maxLength={200}
        className="noteTextArea"
        onChange={scaleTextArea}
      ></textarea>
      <button className="noteDeleteButton">DELETE</button>
    </div>
  );
}
