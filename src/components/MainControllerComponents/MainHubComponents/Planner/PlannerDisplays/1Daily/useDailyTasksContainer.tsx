import { TasksArrayContext } from "components/MainControllerComponents/MainHub";
import { useContext, useState } from "react";
import { ITaskObject } from "types/ITaskObject";

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
    //   new Date(tasksObjectsArray[0].startTime).getFullYear() +
    //     "-" +
    //     ("0" + (new Date(tasksObjectsArray[0].startTime).getMonth() + 1)).slice(
    //       -2
    //     ) +
    //     "-" +
    //     ("0" + new Date(tasksObjectsArray[0].startTime).getDate()).slice(-2),
    //   date
    // );
    const tasksHourFiltered = tasksObjectsArray.filter(
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
    console.log("START");
    console.log(tasksHourFiltered[0]);

    const maxSortNumber = Math.max(
      ...tasksHourFiltered.map((task) => task.sortNumber)
    );

    console.log(maxSortNumber);

    const arraySize =
      maxSortNumber >= tasksHourFiltered.length
        ? maxSortNumber
        : tasksHourFiltered.length;

    console.log(arraySize);

    const sortArray: (ITaskObject | null)[] = new Array(arraySize).fill(null);
    const newSortsArray: ITaskObject[] = [];

    console.log(sortArray);

    tasksHourFiltered.forEach((task) => {
      if (task.sortNumber != 0) {
        sortArray[task.sortNumber - 1] = task;
      } else {
        newSortsArray.push(task);
      }
    });

    console.log(sortArray, 2);
    console.log(newSortsArray);

    newSortsArrayLoop: for (const task of newSortsArray) {
      for (const [index, task_] of sortArray.entries()) {
        if (task_ === null) {
          sortArray[index] = task;
          continue newSortsArrayLoop;
        }
      }
    }

    const filledSortArray = sortArray.map((task, index) => {
      if (task && task.sortNumber === 0)
        return { ...task, sortNumber: index + 1 };
      else return null;
    });

    const sortNumbersArray = [];

    for (const task of filledSortArray) {
      if (task) sortNumbersArray.push(task.sortNumber);
    }

    const tasksSorted = [];
    for (let i = 1; i <= arraySize; i++) {
      if (sortNumbersArray.includes(i)) {
        tasksSorted[i] = tasksHourFiltered.find((x) => x.sortNumber == i);
      } else {
        tasksSorted[i] = undefined;
      }
    }

    // console.log(tasksHourFiltered);
    const tasks: JSX.Element[] = tasksHourFiltered.map((task) => {
      if (task) {
        return (
          <div key={task.sortNumber + Date.now()}>
            {task.taskText + task.sortNumber}
          </div>
        );
      } else {
        return <div key={Date.now()}></div>;
      }
    });
    return tasks;
  }

  return { tasks };
}
