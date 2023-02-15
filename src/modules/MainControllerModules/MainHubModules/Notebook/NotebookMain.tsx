import { useState } from "react";
import "style/mainControllerModules/mainHubModules/Notebook/notebookMainStyle.css";
import NotebookNote from "./NotebookNote";

export default function NotebookMain() {
  const [notes, setNotes] = useState<JSX.Element[]>([]);

  function addNewTextArea() {
    console.log("Eg?");
    const dateNow = Date.now();
    setNotes([...notes, <NotebookNote key={dateNow} />]);
  }

  return (
    <div className="notebookMainContainer">
      {notes}
      <button onClick={() => addNewTextArea()}>+</button>
    </div>
  );
}
