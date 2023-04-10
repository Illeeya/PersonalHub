import "./plannerSideBarMainStyle.css";
import { usePlannerSideBar } from "./usePlannerSideBar";

export default function PlannerSideBar() {
  const { sideBarTasks } = usePlannerSideBar();
  return <div className="plannerSideBarContainer">{sideBarTasks}</div>;
}
