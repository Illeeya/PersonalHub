import "./plannerSideBarMainStyle.css";

interface IPlannerSideBar {
  jsxTasksArraySidebar: JSX.Element[];
}
export default function PlannerSideBar({
  jsxTasksArraySidebar,
}: IPlannerSideBar) {
  return <div className="plannerSideBarContainer">{jsxTasksArraySidebar}</div>;
}
