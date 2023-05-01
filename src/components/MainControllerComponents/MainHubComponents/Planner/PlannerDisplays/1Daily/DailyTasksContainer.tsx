import "./dailyDisplayStyle.css";
import { useDailyTasksContainer } from "./useDailyTasksContainer";

interface IDailyTasksContainer {
  date: string;
  hour: Number;
  tester: (id: number, sort: number) => void;
}
export default function DailyTasksContainer({
  date,
  hour,
  tester,
}: IDailyTasksContainer) {
  const { tasks } = useDailyTasksContainer(date, hour, tester);
  return <div className="dailyTaskContainer">{tasks()}</div>;
}
