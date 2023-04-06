import "style/mainControllerModules/mainHubModules/Planner/PlannerDisplays/dailyDisplayStyle.css";
import { useDailyDisplay } from "components/MainControllerComponents/MainHubComponents/Planner/PlannerDisplays/usePlannerDisplays";

export default function DailyDisplay() {
  const { dailyTasks } = useDailyDisplay();

  return <div className="dailyDisplayContainer">{dailyTasks}</div>;
}
