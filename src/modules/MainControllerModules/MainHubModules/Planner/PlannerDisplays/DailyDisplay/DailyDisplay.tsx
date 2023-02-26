import "style/mainControllerModules/mainHubModules/Planner/PlannerDisplays/dailyDisplayStyle.css";
import { useDailyDisplay } from "logic/PlannerLogic/PlannerDisplays/usePlannerDisplays";

export default function DailyDisplay() {
  const { dailyTasks } = useDailyDisplay();

  return <div className="dailyDisplayContainer">{dailyTasks}</div>;
}
