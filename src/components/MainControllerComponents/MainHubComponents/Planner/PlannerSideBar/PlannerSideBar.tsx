import "./plannerSideBarMainStyle.css";
import { usePlannerSideBar } from "./usePlannerSideBar";

export default function PlannerSideBar() {
  const { sideBarTasks } = usePlannerSideBar();

  return (
    <div className="plannerTasksSidebar">
      <div className="plannerSideBarContainer">{sideBarTasks}</div>
    </div>
  );
}
