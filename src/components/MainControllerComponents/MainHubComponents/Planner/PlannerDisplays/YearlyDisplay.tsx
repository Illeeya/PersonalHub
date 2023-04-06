import {
  useYearlyDisplay,
  yearlyDisplayProps,
} from "components/MainControllerComponents/MainHubComponents/Planner/PlannerDisplays/usePlannerDisplays";
import "style/mainControllerModules/mainHubModules/Planner/PlannerDisplays/yearlyDisplayStyle.css";

export default function YearlyDisplay({
  monthChange,
  displayChange,
  pickedYear,
}: yearlyDisplayProps) {
  const monthCells = useYearlyDisplay(monthChange, displayChange, pickedYear);
  return <div className="yearlyDisplayContainer">{monthCells}</div>;
}