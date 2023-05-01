import "./dailyDisplayStyle.css";
import { useDailyDisplay } from "../usePlannerDisplays";

interface IDailyDisplay {
  date: string;
  tester: (id: number, sort: number) => void;
}
export default function DailyDisplay({ date, tester }: IDailyDisplay) {
  const { dailyTasks } = useDailyDisplay(date, tester);

  return <div className="dailyDisplayContainer">{dailyTasks}</div>;
}
