import "./taskStyle.css";
import { useTask } from "./useTask";

export interface ITask {
  taskID: number;
  taskText: string;
  taskHandler: (taskID: number, taskText: string, actionType: string) => void;
}
export default function Task({ taskID, taskText, taskHandler }: ITask) {
  const { taskValue, setTaskValue } = useTask({
    taskID,
    taskText,
    taskHandler,
  });

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
