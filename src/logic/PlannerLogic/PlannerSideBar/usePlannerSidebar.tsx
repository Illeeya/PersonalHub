import { useTaskHandler } from "logic/TaskListLogic/useTaskList";
import { useEffect, useState } from "react";

export function usePlannerSidebar() {
  const { tasksObjectsArray } = useTaskHandler();
  const [tasks, setTasks] = useState<JSX.Element[]>([]);
}
