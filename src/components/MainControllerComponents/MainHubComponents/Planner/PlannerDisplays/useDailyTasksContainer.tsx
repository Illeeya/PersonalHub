import { useTaskHandler } from "components/MainControllerComponents/useMainHub";
import { useContext, useState } from "react";

export function useDailyTasksContainer() {
  const { TasksArrayContext } = useTaskHandler();
  const jsxTasksArray = useContext(TasksArrayContext);
  const [tasksAmount, setTasksAmount] = useState(jsxTasksArray.length);

  return { tasksAmount };
}
