import "./dailyDisplayStyle.css";
import { useDailyTasksContainer } from "./useDailyTasksContainer";

interface IDailyTasksContainer {
  date: string;
  hour: Number;
}
export default function DailyTasksContainer({
  date,
  hour,
}: IDailyTasksContainer) {
  const { tasks } = useDailyTasksContainer(date, hour);
  return <div className="dailyTaskContainer">{tasks()}</div>; // classname='newModuleMainContainer'
}
