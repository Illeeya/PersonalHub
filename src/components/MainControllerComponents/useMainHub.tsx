import { useState, useEffect, useContext, createContext } from "react";
import Task from "./MainHubComponents/TaskList/Task";
import SideBarTask from "./MainHubComponents/Planner/PlannerSideBar/SideBarTask";

type TaskObject = {
  taskID: number;
  taskText: string;
  startTime: Date;
  endTime: Date;
};

const startDateConst = new Date(2023, 3, 9, 11, 0, 0); // Note: month is zero-indexed, so 3 represents April
const endDateConst = new Date(2023, 3, 9, 14, 0, 0);

export function saveTasksToLocalStorage(taskArray: TaskObject[]) {
  const taskArray_ = taskArray.filter((task) => task.taskText.trim() !== "");
  localStorage.setItem("personalHubTasksList", JSON.stringify(taskArray_));
}

// State Logic

export const useTaskHandler = () => {
  const tasksContext = createContext<TaskObject[]>([]);
  const [activeElement, setAcviteElement] = useState("hubElements");
  const [jsxTasksArray, setJsxTasksArray] = useState<JSX.Element[]>([]);
  const [jsxTasksArraySidebar, setJsxTasksArraySidebar] = useState<
    JSX.Element[]
  >([]);
  const [tasksObjectsArray, setTasksObjectsArray] = useState<TaskObject[]>(
    JSON.parse(localStorage.getItem("personalHubTasksList") || "[]")
  );

  function tasksProvider() {
    const [providerTasks, setProviderTasks] = useState<TaskObject[]>(
      JSON.parse(localStorage.getItem("personalHubTasksList") || "[]")
    );

    useEffect(() => {
      setProviderTasks(tasksObjectsArray);
    }, [tasksObjectsArray]);
    return <tasksContext.Provider value={providerTasks} />;
  }

  function handleActiveElementChange(activeateElement: string) {
    if (activeateElement === "hubElements") {
      cleanTaskList();
    }
    setAcviteElement(activeateElement);
  }

  function cleanTaskList() {
    setTasksObjectsArray((current) =>
      current.filter((task) => task.taskText.trim() !== "")
    );
  }

  useEffect(() => {
    setJsxTasksArray(
      tasksObjectsArray.map((task) => {
        return (
          <Task
            key={task.taskID}
            taskID={task.taskID}
            taskText={task.taskText}
            taskHandler={handleTaskChange}
          />
        );
      })
    );

    setJsxTasksArraySidebar(
      tasksObjectsArray.map((task) => {
        return (
          <SideBarTask
            key={task.taskID}
            taskID={task.taskID}
            taskText={task.taskText}
            startTime={startDateConst}
            endTime={endDateConst}
          />
        );
      })
    );

    saveTasksToLocalStorage(tasksObjectsArray);
  }, [tasksObjectsArray]);

  function handleTaskChange(
    taskID: number,
    taskText: string,
    actionType: string
  ) {
    if (actionType === "MODIFY")
      setTasksObjectsArray((prevTasksObjectsArray) =>
        prevTasksObjectsArray.map((task) => {
          if (task.taskID === taskID)
            return {
              taskID: taskID,
              taskText: taskText,
              startTime: startDateConst,
              endTime: endDateConst,
            };
          else return task;
        })
      );
    if (actionType === "DELETE")
      setTasksObjectsArray(
        tasksObjectsArray.filter((task) => {
          if (task.taskID !== taskID) return task;
        })
      );
  }
  function addTask(taskText: string) {
    if (!tasksObjectsArray.find((task) => task.taskText.trim() === "")) {
      let newTaskId = Date.now();
      setTasksObjectsArray([
        ...tasksObjectsArray,
        {
          taskID: newTaskId,
          taskText: taskText,
          startTime: startDateConst,
          endTime: endDateConst,
        },
      ]);
    }
  }

  return {
    jsxTasksArray,
    jsxTasksArraySidebar,
    addTask,
    activeElement,
    handleActiveElementChange,
    tasksProvider,
  };
};
