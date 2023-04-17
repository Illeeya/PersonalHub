import { useMainHub } from "./useMainHub";
import { TaskObject, useTaskHandler } from "./useMainHubTasks";
import "./mainHubStyle.css";
import MainHubHeader from "./MainHubComponents/MainHubHeader";
import { createContext } from "react";

interface ITasksArrayContext {
  tasksObjectsArray: TaskObject[];
  setTasksObjectsArrayHandler: (newArray: TaskObject[]) => void;
  addTask: (taskText: string) => void;
}

const defaultTasksArrayContext: ITasksArrayContext = {
  tasksObjectsArray: [],
  setTasksObjectsArrayHandler: (newArray: TaskObject[]) => {},
  addTask: (taskText: string) => {},
};
export const TasksArrayContext = createContext<ITasksArrayContext>(
  defaultTasksArrayContext
);

export default function MainHub() {
  const {
    tasksObjectsArray,
    setTasksObjectsArrayHandler,
    cleanTaskList,
    addTask,
  } = useTaskHandler();

  const { handleActiveElementChange, activeElement, DisplayElement } =
    useMainHub(cleanTaskList);

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
          addTask,
        }}
      >
        {DisplayElement(activeElement)}
      </TasksArrayContext.Provider>
    </div>
  );
}
