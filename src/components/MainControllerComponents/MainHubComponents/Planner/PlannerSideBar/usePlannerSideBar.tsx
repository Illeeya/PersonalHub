import { TasksArrayContext } from "components/MainControllerComponents/MainHub";
import { useContext, useEffect, useState } from "react";
import SideBarTask from "./SideBarTask";

export function usePlannerSideBar() {
  const [sideBarTasks, setSideBarTasks] = useState<JSX.Element[]>([]);
  const { tasksObjectsArray } = useContext(TasksArrayContext);

  useEffect(() => {
    setSideBarTasks(
      tasksObjectsArray.map((task) => {
        return (
          <SideBarTask
            key={task.taskID}
            taskID={task.taskID}
            taskText={task.taskText}
            startTime={task.startTime}
            endTime={task.endTime}
            sortNumber={task.sortNumber}
          />
        );
      })
    );
  }, []);

  return { sideBarTasks };
}
