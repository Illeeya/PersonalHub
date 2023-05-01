import { useWeeklyDisplay } from "../usePlannerDisplays";
import "./weeklyDisplayStyle.css";

export interface IWeeklyDisplay {
  selectedDateProp: string;
  dayChange: (day: string) => void;
  displayChange: (display: string) => void;
}
export default function WeeklyDisplay({
  selectedDateProp,
  dayChange,
  displayChange,
}: IWeeklyDisplay) {
  const { weeklyTasks } = useWeeklyDisplay(
    selectedDateProp,
    dayChange,
    displayChange
  );
  return <div className="weeklyDisplayContainer">{weeklyTasks}</div>;
}
