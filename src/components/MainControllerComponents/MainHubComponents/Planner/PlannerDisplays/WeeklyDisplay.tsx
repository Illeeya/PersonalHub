import {
  useWeeklyDisplay,
  weeklyDisplayProps,
} from "components/MainControllerComponents/MainHubComponents/Planner/PlannerDisplays/usePlannerDisplays";
import "./weeklyDisplayStyle.css";

export default function WeeklyDisplay({
  selectedDateProp,
  dayChange,
  displayChange,
}: weeklyDisplayProps) {
  const { weeklyTasks } = useWeeklyDisplay(
    selectedDateProp,
    dayChange,
    displayChange
  );
  return <div className="weeklyDisplayContainer">{weeklyTasks}</div>;
}
