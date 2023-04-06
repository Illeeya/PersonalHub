import "style/mainControllerModules/mainHubModules/TaskList/taskListMainStyle.css";
interface ITaskListMain {
  addTask: (taskText: string) => void;
  jsxTasksArray: JSX.Element[];
}

export default function TaskListMain({
  jsxTasksArray,
  addTask,
}: ITaskListMain) {
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
