import { useState } from "react";
import NotebookMain from "./MainHubComponents/Notebook/NotebookMain";
import PlannerMain from "./MainHubComponents/Planner/PlannerMain";
import TaskListMain from "./MainHubComponents/TaskList/TaskListMain";

export const useMainHub = (cleanTaskList: () => void) => {
  const [activeElement, setAcviteElement] = useState("hubElements");

  function DisplayElement() {
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
        return <TaskListMain />;
      case "planner":
        return <PlannerMain />;
      case "notebook":
        return <NotebookMain />;
      default:
        return null;
    }
  }

  function handleActiveElementChange(activeateElement: string) {
    if (activeateElement === "hubElements") {
      cleanTaskList();
    }
    if (activeElement !== activeateElement) setAcviteElement(activeateElement);
  }

  return {
    handleActiveElementChange,
    DisplayElement,
  };
};
