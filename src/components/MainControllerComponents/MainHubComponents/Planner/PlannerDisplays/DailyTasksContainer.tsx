import "./dailyDisplayStyle.css";
import { useDailyTasksContainer } from "./useDailyTasksContainer";

export default function DailyTasksContainer() {
  const { tasksAmount } = useDailyTasksContainer();
  return <div className="dailyTaskContainer">{tasksAmount}</div>; // classname='newModuleMainContainer'
}
