import "./dailyDisplayStyle.css";
import { useDailyDisplay } from "./usePlannerDisplays";

interface IDailyDisplay {
  date: string;
}
export default function DailyDisplay({ date }: IDailyDisplay) {
  const { dailyTasks } = useDailyDisplay(date);

  return <div className="dailyDisplayContainer">{dailyTasks}</div>;
}
