import { useState, useEffect, useContext, createContext } from "react";
import Task from "./MainHubComponents/TaskList/Task";

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
  const [jsxTasksArray, setJsxTasksArray] = useState<JSX.Element[]>([]);
  const [tasksObjectsArray, setTasksObjectsArray] = useState<TaskObject[]>(
    JSON.parse(localStorage.getItem("personalHubTasksList") || "[]")
  );

  const TasksArrayContext = createContext<TaskObject[]>(tasksObjectsArray);

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
            startTime={task.startTime}
            endTime={task.endTime}
            taskHandler={handleTaskChange}
          />
        );
      })
    );
    // setJsxTasksArraySidebar(
    //   tasksObjectsArray.map((task) => {
    //     return (
    //       <SideBarTask
    //         key={task.taskID}
    //         taskID={task.taskID}
    //         taskText={task.taskText}
    //         startTime={startDateConst}
    //         endTime={endDateConst}
    //       />
    //     );
    //   })
    // );

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
              startTime: task.startTime,
              endTime: task.endTime,
              sortNumber: task.sortNumber,
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
          sortNumber: null,
        },
      ]);
    }
  }

  return {
    jsxTasksArray,
    // jsxTasksArraySidebar,
    addTask,
    activeElement,
    handleActiveElementChange,
    tasksObjectsArray,
    TasksArrayContext,
    test,
  };
};
