import { useMainHub } from "./useMainHub";
import { useTaskHandler } from "./useMainHubTasks";
import "./mainHubStyle.css";
import MainHubHeader from "./MainHubComponents/MainHubHeader";
import { createContext } from "react";
import { ITasksArrayContext } from "types/ITasksArrayContext";
import { TaskObject } from "types/ITaskObject";

// const defaultTasksArrayContext: ITasksArrayContext = {
//   tasksObjectsArray: [],
//   setTasksObjectsArrayHandler: () => {},
//   addTask: () => {},
// };
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

  const { handleActiveElementChange, DisplayElement } =
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
        {DisplayElement()}
      </TasksArrayContext.Provider>
    </div>
  );
}
