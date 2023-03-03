import "style/mainControllerModules/mainHubModules/TaskList/taskListMainStyle.css";
import * as logic from "logic/TaskListLogic/useTaskList";

export default function TaskListMain() {
  const { jsxTasksArray, addTask } = logic.useTaskHandler();

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
