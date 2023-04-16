import "./taskListMainStyle.css";
import useTaskListMain from "./useTaskListMain";
interface ITaskListMain {
  addTask: (taskText: string) => void;
}

export default function TaskListMain({ addTask }: ITaskListMain) {
  const { jsxTasksArray } = useTaskListMain();

  return (
    <div className="taskListMainContainer">
      <div className="courtain"></div>
      <div className="tasksContainer">{jsxTasksArray}</div>
      <div className="buttonsContainer">
        <button onClick={() => addTask("")}>New task</button>
      </div>
    </div>
  );
}
