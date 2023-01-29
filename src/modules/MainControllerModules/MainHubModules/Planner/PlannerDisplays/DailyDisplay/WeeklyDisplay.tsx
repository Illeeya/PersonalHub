import { useWeeklyDisplay } from "../../../../../../logic/PlannerLogic/PlannerDisplays/PlannerDisplaysSharedLogic";
import "../../../../../../style/mainControllerModules/mainHubModules/Planner/PlannerDisplays/weeklyDisplayStyle.css";

export default function WeeklyDisplay() {
  const { weeklyTasks } = useWeeklyDisplay();
  return <div className="weeklyDisplayContainer">{weeklyTasks}</div>;
}
