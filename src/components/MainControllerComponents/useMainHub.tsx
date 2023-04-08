import { useState, useEffect } from "react";
import Task from "./MainHubComponents/TaskList/Task";
import SideBarTask from "./MainHubComponents/Planner/PlannerSideBar/SideBarTask";

type TaskObject = {
  taskID: number;
  taskText: string;
};

export function saveTasksToLocalStorage(taskArray: TaskObject[]) {
  const taskArray_ = taskArray.filter((task) => task.taskText.trim() !== "");
  localStorage.setItem("personalHubTasksList", JSON.stringify(taskArray_));
}

// State Logic

export const useTaskHandler = () => {
  const [activeElement, setAcviteElement] = useState("hubElements");
  const [jsxTasksArray, setJsxTasksArray] = useState<JSX.Element[]>([]);
  const [jsxTasksArraySidebar, setJsxTasksArraySidebar] = useState<
    JSX.Element[]
  >([]);
  const [tasksObjectsArray, setTasksObjectsArray] = useState<TaskObject[]>(
    JSON.parse(localStorage.getItem("personalHubTasksList") || "[]")
  );

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
            return { taskID: taskID, taskText: taskText };
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
        { taskID: newTaskId, taskText: taskText },
      ]);
    }
  }

  return {
    jsxTasksArray,
    jsxTasksArraySidebar,
    addTask,
    activeElement,
    handleActiveElementChange,
  };
};
