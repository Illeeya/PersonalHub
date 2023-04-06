import { useEffect, useState } from "react";

interface ITask {
  taskID: number;
  taskText: string;
  taskHandler: (taskID: number, taskText: string, actionType: string) => void;
}
export const useTask = ({ taskID, taskText, taskHandler }: ITask) => {
  const [taskValue, setTaskValue] = useState<string>(taskText);

  useEffect(() => {
    taskHandler(taskID, taskValue, "MODIFY");
  }, [taskValue]);

  return { taskValue, setTaskValue };
};
