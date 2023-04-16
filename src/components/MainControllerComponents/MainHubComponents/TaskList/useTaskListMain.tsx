import { TasksArrayContext } from "components/MainControllerComponents/MainHub";
import { TaskObject } from "components/MainControllerComponents/useMainHub";
import { useContext, useEffect, useState } from "react";
import Task from "./Task";

export default function useTaskListMain() {
  const [jsxTasksArray, setJsxTasksArray] = useState<JSX.Element[]>([]);

  const { tasksObjectsArray, setTasksObjectsArrayHandler } =
    useContext(TasksArrayContext);

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
  }, [tasksObjectsArray]);

  function handleTaskChange(
    taskID: number,
    taskText: string,
    actionType: string
  ) {
    if (actionType === "MODIFY")
      setTasksObjectsArrayHandler(
        tasksObjectsArray.map((task) => {
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
      setTasksObjectsArrayHandler(
        tasksObjectsArray.filter((task) => {
          if (task.taskID !== taskID) return task;
        })
      );
  }

  return { jsxTasksArray };
}
