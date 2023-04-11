import "./taskStyle.css";
import { useTask } from "./useTask";

export interface ITask {
  taskID: number;
  taskText: string;
  startTime: Date;
  endTime: Date;
  taskHandler: (taskID: number, taskText: string, actionType: string) => void;
}
export default function Task({
  taskID,
  taskText,
  startTime,
  endTime,
  taskHandler,
}: ITask) {
  const { taskValue, setTaskValue } = useTask({
    taskID,
    taskText,
    taskHandler,
  });

  return (
    <div className="task" data-StartTime={startTime} data-EndTime={endTime}>
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
