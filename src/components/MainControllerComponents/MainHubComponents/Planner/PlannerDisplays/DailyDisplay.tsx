import "./dailyDisplayStyle.css";
import { useDailyDisplay } from "./usePlannerDisplays";

export default function DailyDisplay() {
  const { dailyTasks } = useDailyDisplay();

  return <div className="dailyDisplayContainer">{dailyTasks}</div>;
}
