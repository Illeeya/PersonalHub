import { PlannerSideBarProps } from "components/MainControllerComponents/useMainHub";
import "./plannerSideBarMainStyle.css";

export default function PlannerSideBar({
  jsxTasksArraySidebar,
}: PlannerSideBarProps) {
  return <div className="plannerSideBarContainer">{jsxTasksArraySidebar}</div>;
}
