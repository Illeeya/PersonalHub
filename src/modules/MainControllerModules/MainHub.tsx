import { useTaskHandler } from "logic/TaskListLogic/useTaskList";
import { useState } from "react";
import "style/mainControllerModules/mainHubStyle.css";
import MainHubHeader from "./MainHubModules/MainHubHeader";
import NotebookMain from "./MainHubModules/Notebook/NotebookMain";
import PlannerMain from "./MainHubModules/Planner/PlannerMain";
import TaskListMain from "./MainHubModules/TaskList/TaskListMain";
export default function MainHub() {
  const {
    jsxTasksArray,
    jsxTasksArraySidebar,
    addTask,
    activeElement,
    handleActiveElementChange,
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
