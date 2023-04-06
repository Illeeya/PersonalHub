import { PlannerSideBarProps } from "components/MainControllerComponents/useMainHub";
import "style/mainControllerModules/mainHubModules/Planner/PlannerSideBar/plannerSideBarMainStyle.css";

export default function PlannerSideBar({
  jsxTasksArraySidebar,
}: PlannerSideBarProps) {
  return <div className="plannerSideBarContainer">{jsxTasksArraySidebar}</div>;
}
