import { useState, useEffect, useContext, createContext, useMemo } from "react";
import NotebookMain from "./MainHubComponents/Notebook/NotebookMain";
import PlannerMain from "./MainHubComponents/Planner/PlannerMain";
import Task from "./MainHubComponents/TaskList/Task";
import TaskListMain from "./MainHubComponents/TaskList/TaskListMain";
import { isEqual } from "lodash";

export type TaskObject = {
  taskID: number;
  taskText: string;
  startTime: Date;
  endTime: Date;
  sortNumber: number | null;
};

const startDateConst = new Date(2023, 3, 9, 11, 0, 0);
const endDateConst = new Date(2023, 3, 9, 14, 0, 0);

export function saveTasksToLocalStorage(taskArray: TaskObject[]) {
  const taskArray_ = taskArray.filter((task) => task.taskText.trim() !== "");
  localStorage.setItem("personalHubTasksList", JSON.stringify(taskArray_));
}

// State Logic

export const useTaskHandler = () => {
  const [activeElement, setAcviteElement] = useState("hubElements");
  const [tasksObjectsArray, setTasksObjectsArray] = useState<TaskObject[]>(
    JSON.parse(localStorage.getItem("personalHubTasksList") || "[]")
  );

  function setTasksObjectsArrayHandler(newTasks: TaskObject[]) {
    if (!isEqual(newTasks, tasksObjectsArray)) setTasksObjectsArray(newTasks);
  }

  useEffect(() => {
    saveTasksToLocalStorage(tasksObjectsArray);
  }, [tasksObjectsArray]);

  // const TasksArrayContext = createContext<TaskObject[]>(tasksObjectsArray);

  function test(id: number, sort: number) {
    console.log(id, sort);
    setTasksObjectsArray((prevTasksObjectsArray) =>
      prevTasksObjectsArray.map((task) => {
        if (task.taskID === id)
          return {
            taskID: id,
            taskText: task.taskText,
            startTime: task.startTime,
            endTime: task.endTime,
            sortNumber: sort,
          };
        else return task;
      })
    );
  }

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
        return <TaskListMain addTask={addTask} />;
      case "planner":
        return (
          // <TasksArrayContext.Provider value={tasksObjectsArray}>
          <PlannerMain tester={test} />
          // </TasksArrayContext.Provider>
        );
      case "notebook":
        return <NotebookMain addTask={addTask} />;
      default:
        return null;
    }
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
          sortNumber: null,
        },
      ]);
    }
  }

  return {
    // jsxTasksArray,
    // jsxTasksArraySidebar,
    addTask,
    activeElement,
    handleActiveElementChange,
    tasksObjectsArray,
    // TasksArrayContext,
    test,
    DisplayElement,
    setTasksObjectsArrayHandler,
    setTasksObjectsArray,
  };
};
