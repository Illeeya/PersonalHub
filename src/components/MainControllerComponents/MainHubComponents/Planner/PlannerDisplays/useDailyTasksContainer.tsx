import { TasksArrayContext } from "components/MainControllerComponents/MainHub";
import { useContext, useState } from "react";

export function useDailyTasksContainer(
  date: string,
  hour: Number,
  tester: (id: number, sort: number) => void
) {
  const { tasksObjectsArray } = useContext(TasksArrayContext);
  const [tasksAmount, setTasksAmount] = useState(tasksObjectsArray.length);

  function tasks() {
    // console.log(new Date(jsxTasksArray[0].startTime).getHours(), hour);
    // console.log(new Date(jsxTasksArray[0].startTime).getFullYear(), date);
    // console.log(new Date(jsxTasksArray[0].startTime).getMonth(), date);
    // console.log(new Date(jsxTasksArray[0].startTime).getDate(), date);
    // console.log(
    //   new Date(jsxTasksArray[0].startTime).getFullYear() +
    //     "-" +
    //     ("0" + (new Date(jsxTasksArray[0].startTime).getMonth() + 1)).slice(
    //       -2
    //     ) +
    //     "-" +
    //     ("0" + new Date(jsxTasksArray[0].startTime).getDate()).slice(-2)
    // );
    const tasks_ = tasksObjectsArray.filter(
      (task) =>
        new Date(task.startTime).getHours() <= hour &&
        new Date(task.endTime).getHours() >= hour &&
        (
          new Date(task.startTime).getFullYear() +
          "-" +
          ("0" + (new Date(task.startTime).getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + new Date(task.startTime).getDate()).slice(-2)
        ).toString() == date
    );

    // console.log(tasks_);
    const tasks: JSX.Element[] = tasks_.map((task) => (
      <div>
        {task.taskText + task.sortNumber}
        <button
          onClick={() => {
            /* HERE WILL BE TESTER */
          }}
        >
          +
        </button>
      </div>
    ));
    return tasks;
  }

  return { tasks };
}
