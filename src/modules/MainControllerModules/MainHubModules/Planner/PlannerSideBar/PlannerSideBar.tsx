import { PlannerSideBarProps } from "logic/TaskListLogic/useTaskList";
import "style/mainControllerModules/mainHubModules/Planner/PlannerSideBar/plannerSideBarMainStyle.css";

import SideBarTask from "./SideBarTask";

export default function PlannerSideBar({
  jsxTasksArraySidebar,
}: PlannerSideBarProps) {
  return <div className="plannerSideBarContainer">{jsxTasksArraySidebar}</div>;
}
