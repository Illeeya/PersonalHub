import { useState, useEffect } from "react";
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

function saveTasksToLocalStorage(taskArray: TaskObject[]) {
  const taskArray_ = taskArray.filter((task) => task.taskText.trim() !== "");
  localStorage.setItem("personalHubTasksList", JSON.stringify(taskArray_));
}

// State Logic

export const useTaskHandler = () => {
  const [tasksObjectsArray, setTasksObjectsArray] = useState<TaskObject[]>(
    JSON.parse(localStorage.getItem("personalHubTasksList") || "[]")
  );

  useEffect(() => {
    saveTasksToLocalStorage(tasksObjectsArray);
  }, [tasksObjectsArray]);

  function setTasksObjectsArrayHandler(newTasks: TaskObject[]) {
    if (!isEqual(newTasks, tasksObjectsArray)) setTasksObjectsArray(newTasks);
  }

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

  function cleanTaskList() {
    setTasksObjectsArray((current) =>
      current.filter((task) => task.taskText.trim() !== "")
    );
  }

  function addTask(taskText: string) {
    console.log(`Task adding: ${taskText}`);
    if (!tasksObjectsArray.find((task) => task.taskText.trim() === "")) {
      let newTaskId = Date.now();
      setTasksObjectsArrayHandler([
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
    addTask,
    tasksObjectsArray,
    test,
    setTasksObjectsArrayHandler,
    setTasksObjectsArray,
    cleanTaskList,
  };
};
