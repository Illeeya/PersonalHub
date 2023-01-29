import {
  useMonthlyDisplay,
  monthlyDisplayProps,
} from "../../../../../../logic/PlannerLogic/PlannerDisplays/PlannerDisplaysSharedLogic";
import "../../../../../../style/mainControllerModules/mainHubModules/Planner/PlannerDisplays/monthlyDisplayStyle.css";
export default function MonthlyDisplay({
  selectedDateProp,
}: monthlyDisplayProps) {
  /////////////////////////////
  const { daysArray, firstDay } = useMonthlyDisplay(selectedDateProp);
  return <div className="monthlyDisplayContainer">{daysArray}</div>;
}
