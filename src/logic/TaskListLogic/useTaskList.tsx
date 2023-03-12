import { useState, useEffect } from "react";
import Task from "modules/MainControllerModules/MainHubModules/TaskList/Task";
import SideBarTask from "modules/MainControllerModules/MainHubModules/Planner/PlannerSideBar/SideBarTask";

export interface TaskObject {
  taskID: number;
  taskText: string;
}

export interface TaskProps extends TaskObject {
  taskHandler: (taskID: number, taskText: string, actionType: string) => void;
}

export interface AddTaskProp {
  addTask: (taskText: string) => void;
}
export interface TaskListMainProps {
  jsxTasksArray: JSX.Element[];
  addTask: (taskText: string) => void;
}

export interface PlannerSideBarProps {
  jsxTasksArraySidebar: JSX.Element[];
}

export function saveTasksToLocalStorage(taskArray: TaskObject[]) {
  localStorage.setItem("personalHubTasksList", JSON.stringify(taskArray));
}

// State Logic

export const useTaskHandler = () => {
  const [jsxTasksArray, setJsxTasksArray] = useState<JSX.Element[]>([]);
  const [jsxTasksArraySidebar, setJsxTasksArraySidebar] = useState<
    JSX.Element[]
  >([]);
  const [tasksObjectsArray, setTasksObjectsArray] = useState<TaskObject[]>(
    JSON.parse(localStorage.getItem("personalHubTasksList") || "[]")
  );

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
    let newTaskId = Date.now();
    setTasksObjectsArray([
      ...tasksObjectsArray,
      { taskID: newTaskId, taskText: taskText },
    ]);
  }

  return { jsxTasksArray, jsxTasksArraySidebar, addTask };
};
