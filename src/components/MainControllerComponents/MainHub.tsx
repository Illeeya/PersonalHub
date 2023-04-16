import { TaskObject, useTaskHandler } from "./useMainHub";
import "./mainHubStyle.css";
import MainHubHeader from "./MainHubComponents/MainHubHeader";
import NotebookMain from "./MainHubComponents/Notebook/NotebookMain";
import PlannerMain from "./MainHubComponents/Planner/PlannerMain";
import TaskListMain from "./MainHubComponents/TaskList/TaskListMain";
import { createContext } from "react";

interface ITasksArrayContext {
  tasksObjectsArray: TaskObject[];
  setTasksObjectsArrayHandler: (newArray: TaskObject[]) => void;
}

const defaultTasksArrayContext: ITasksArrayContext = {
  tasksObjectsArray: [],
  setTasksObjectsArrayHandler: (newArray: TaskObject[]) => {},
};
export const TasksArrayContext = createContext<ITasksArrayContext>(
  defaultTasksArrayContext
);

export default function MainHub() {
  const {
    handleActiveElementChange,
    tasksObjectsArray,
    DisplayElement,
    setTasksObjectsArrayHandler,
    setTasksObjectsArray,
  } = useTaskHandler();

  return (
    <div className="mainHubContainer">
      <MainHubHeader
        goBack={() => {
          handleActiveElementChange("hubElements");
        }}
      />

      <TasksArrayContext.Provider
        value={{
          tasksObjectsArray,
          setTasksObjectsArrayHandler,
        }}
      >
        <DisplayElement />
      </TasksArrayContext.Provider>
    </div>
  );
}
