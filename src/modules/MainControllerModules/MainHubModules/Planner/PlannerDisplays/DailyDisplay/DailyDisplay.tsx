import "../../../../../../style/mainControllerModules/mainHubModules/Planner/PlannerDisplays/dailyDisplayStyle.css";
import { useDailyDisplay } from "../../../../../../logic/PlannerLogic/PlannerDisplays/PlannerDisplaysSharedLogic";

export default function DailyDisplay() {
  const { dailyTasks } = useDailyDisplay();

  return <div className="dailyDisplayContainer">{dailyTasks}</div>;
}
