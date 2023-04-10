import { useTaskHandler } from "./useMainHub";
import "./mainHubStyle.css";
import MainHubHeader from "./MainHubComponents/MainHubHeader";
import NotebookMain from "./MainHubComponents/Notebook/NotebookMain";
import PlannerMain from "./MainHubComponents/Planner/PlannerMain";
import TaskListMain from "./MainHubComponents/TaskList/TaskListMain";
export default function MainHub() {
  const {
    jsxTasksArray,
    addTask,
    activeElement,
    handleActiveElementChange,
    TasksArrayContext,
    tasksObjectsArray,
  } = useTaskHandler();

  return (
    <div className="mainHubContainer">
      <MainHubHeader
        goBack={() => {
          console.log("?");
          handleActiveElementChange("hubElements");
        }}
      />

      {(() => {
        switch (activeElement) {
          case "hubElements":
            return (
              <div className="hubElementsContainer">
                <button
                  className="hubElement"
                  onClick={() => {
                    handleActiveElementChange("taskList");
                  }}
                >
                  Task list
                </button>
                <button
                  className="hubElement"
                  onClick={() => {
                    handleActiveElementChange("planner");
                  }}
                >
                  Planner
                </button>
                <button
                  className="hubElement"
                  onClick={() => handleActiveElementChange("notebook")}
                >
                  Notebook
                </button>
              </div>
            );
          case "taskList":
            return (
              <TaskListMain jsxTasksArray={jsxTasksArray} addTask={addTask} />
            );
          case "planner":
            return (
              // <TasksArrayContext.Provider value={tasksObjectsArray}>
              <PlannerMain />
              // </TasksArrayContext.Provider>
            );
          case "notebook":
            return <NotebookMain addTask={addTask} />;
          default:
            return null;
        }
      })()}
    </div>
  );
}
