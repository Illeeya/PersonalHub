import "style/mainControllerModules/mainHubModules/Planner/PlannerSideBar/plannerSideBarMainStyle.css";

import SideBarTask from "./SideBarTask";

export default function PlannerSideBar() {
  return (
    <div className="plannerSideBarContainer">
      <SideBarTask />
      <SideBarTask />
      <SideBarTask />
      <SideBarTask />
      <SideBarTask />
      <SideBarTask />
      <SideBarTask />
      <SideBarTask />
    </div>
  );
}
