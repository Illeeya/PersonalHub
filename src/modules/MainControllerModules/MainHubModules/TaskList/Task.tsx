import { useEffect, useState } from "react";
import { TaskProps } from "logic/TaskListLogic/TaskListMainLogic";
import "style/mainControllerModules/mainHubModules/TaskList/taskStyle.css";

export default function Task({ taskID, taskText, taskHandler }: TaskProps) {
  const [taskValue, setTaskValue] = useState<string>(taskText);

  useEffect(() => {
    taskHandler(taskID, taskValue, "MODIFY");
  }, [taskValue]);

  return (
    <div className="task">
      <input
        maxLength={16}
        placeholder="Task..."
        type="text"
        value={taskValue}
        onChange={(event) => {
          setTaskValue(event.target.value);
        }}
      />
      <button onClick={() => taskHandler(taskID, "", "DELETE")}>X</button>
    </div>
  );
}
