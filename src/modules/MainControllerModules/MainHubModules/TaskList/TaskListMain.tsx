import "../../../../style/mainControllerModules/mainHubModules/TaskList/taskListMainStyle.css";

export default function TaskListMain() {
  return (
    <div className="taskListMainContainer">
      <div className="courtain"></div>
      <div className="tasksContainer">
        <div className="taskOuterContainer">
          <input maxLength={16} placeholder="Task..." type="text" />
          <button>X</button>
        </div>
      </div>
      <button>New task</button>
    </div>
  );
}
