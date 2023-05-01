import { useState, useEffect } from "react";
import { isEqual } from "lodash";
import { ITaskObject } from "types/ITaskObject";

const startDateConst = new Date(2023, 4, 1, 15, 0, 0);
const endDateConst = new Date(2023, 4, 1, 17, 0, 0);

export const useTaskHandler = () => {
  const [tasksObjectsArray, setTasksObjectsArray] = useState<ITaskObject[]>(
    JSON.parse(localStorage.getItem("personalHubTasksList") || "[]")
  );

  useEffect(() => {
    saveTasksToLocalStorage(tasksObjectsArray);
  }, [tasksObjectsArray]);

  function saveTasksToLocalStorage(taskArray: ITaskObject[]) {
    const taskArray_ = taskArray.filter((task) => task.taskText.trim() !== "");
    localStorage.setItem("personalHubTasksList", JSON.stringify(taskArray_));
  }

  function setTasksObjectsArrayHandler(newTasks: ITaskObject[]) {
    if (!isEqual(newTasks, tasksObjectsArray)) setTasksObjectsArray(newTasks);
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
          sortNumber: 0,
        },
      ]);
    }
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
  return {
    tasksObjectsArray,
    setTasksObjectsArrayHandler,
    cleanTaskList,
    addTask,
  };
};
