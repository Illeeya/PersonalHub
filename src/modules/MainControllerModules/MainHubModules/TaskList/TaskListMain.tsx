import "style/mainControllerModules/mainHubModules/TaskList/taskListMainStyle.css";
import { TaskListMainProps } from "logic/TaskListLogic/useTaskList";

export default function TaskListMain({
  jsxTasksArray,
  addTask,
}: TaskListMainProps) {
  return (
    <div className="taskListMainContainer">
      <div className="courtain"></div>
      <div className="tasksContainer">{jsxTasksArray}</div>
      <div className="buttonsContainer">
        <button onClick={addTask}>New task</button>
      </div>
    </div>
  );
}
