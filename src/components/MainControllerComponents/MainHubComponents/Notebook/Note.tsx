import {
  NoteProps,
  useNote,
} from "components/MainControllerComponents/MainHubComponents/Notebook/useNotebook";
import "./noteStyle.css";

export default function Note({
  noteID,
  noteText,
  handleDelete,
  handleChange,
  addTask,
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

      <button
        onClick={() => {
          if (noteText === "" || noteText.trim() === "") {
            alert("Cannot taskify empty note!");
          } else {
            addTask(noteText);
            handleDelete(noteID);
          }
        }}
        className="noteButton noteTaskifyButton"
      >
        Taskify
      </button>
      <button
        onClick={() => handleDelete(noteID)}
        className="noteButton noteDeleteButton"
      >
        DELETE
      </button>
    </div>
  );
}
