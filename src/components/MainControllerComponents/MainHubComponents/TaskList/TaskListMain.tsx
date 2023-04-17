import { TasksArrayContext } from "components/MainControllerComponents/MainHub";
import { useContext } from "react";
import "./taskListMainStyle.css";
import useTaskListMain from "./useTaskListMain";

export default function TaskListMain() {
  const { jsxTasksArray } = useTaskListMain();

  const { addTask } = useContext(TasksArrayContext);

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
