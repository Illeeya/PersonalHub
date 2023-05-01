import { ITaskObject } from "./ITaskObject";

export type ITasksArrayContext = {
  tasksObjectsArray: ITaskObject[];
  setTasksObjectsArrayHandler: (newArray: ITaskObject[]) => void;
  addTask: (taskText: string) => void;
};
