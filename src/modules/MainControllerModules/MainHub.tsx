import { useTaskHandler } from "logic/TaskListLogic/useTaskList";
import { useState } from "react";
import "style/mainControllerModules/mainHubStyle.css";
import MainHubHeader from "./MainHubModules/MainHubHeader";
import NotebookMain from "./MainHubModules/Notebook/NotebookMain";
import PlannerMain from "./MainHubModules/Planner/PlannerMain";
import TaskListMain from "./MainHubModules/TaskList/TaskListMain";
export default function MainHub() {
  const { jsxTasksArray, jsxTasksArraySidebar, addTask } = useTaskHandler();
  const [activeElement, setAcviteElement] = useState("hubElements");
  return (
    <div className="mainHubContainer">
      <MainHubHeader
        goBack={() => {
          console.log("?");
          setAcviteElement("hubElements");
        }}
      />

      {(() => {
        switch (activeElement) {
          case "hubElements":
            return (
              <div className="hubElementsContainer">
                <div
                  className="hubElement"
                  onClick={() => {
                    setAcviteElement("taskList");
                  }}
                >
                  Task list
                </div>
                <div
                  className="hubElement"
                  onClick={() => {
                    setAcviteElement("planner");
                  }}
                >
                  Planner
                </div>
                <div
                  className="hubElement"
                  onClick={() => setAcviteElement("notebook")}
                >
                  Notebook
                </div>
                <div className="hubElement">E4</div>
                <div className="hubElement">E5</div>
                <div className="hubElement">E6</div>
              </div>
            );
          case "taskList":
            return (
              <TaskListMain jsxTasksArray={jsxTasksArray} addTask={addTask} />
            );
          case "planner":
            return <PlannerMain jsxTasksArraySidebar={jsxTasksArraySidebar} />;
          case "notebook":
            return <NotebookMain addTask={addTask} />;
          default:
            return null;
        }
      })()}
    </div>
  );
}
