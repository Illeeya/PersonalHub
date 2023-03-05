import { TaskObject } from "logic/TaskListLogic/useTaskList";
import "style/mainControllerModules/mainHubModules/Planner/PlannerSideBar/plannerSideBarMainStyle.css";

export default function SideBarTask({ taskText }: TaskObject) {
  return <div className="sideBarTask">{taskText}</div>;
}
