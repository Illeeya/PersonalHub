import {
  useMonthlyDisplay,
  monthlyDisplayProps,
} from "components/MainControllerComponents/MainHubComponents/Planner/PlannerDisplays/usePlannerDisplays";
import "./monthlyDisplayStyle.css";
export default function MonthlyDisplay({
  selectedDateProp,
  dayChange,
  displayChange,
}: monthlyDisplayProps) {
  /////////////////////////////
  const { daysArray, firstDay } = useMonthlyDisplay(
    selectedDateProp,
    dayChange,
    displayChange
  );
  return <div className="monthlyDisplayContainer">{daysArray}</div>;
}
