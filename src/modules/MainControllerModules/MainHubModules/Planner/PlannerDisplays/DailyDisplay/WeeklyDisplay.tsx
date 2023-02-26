import {
  useWeeklyDisplay,
  weeklyDisplayProps,
} from "logic/PlannerLogic/PlannerDisplays/usePlannerDisplays";
import "style/mainControllerModules/mainHubModules/Planner/PlannerDisplays/weeklyDisplayStyle.css";

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
