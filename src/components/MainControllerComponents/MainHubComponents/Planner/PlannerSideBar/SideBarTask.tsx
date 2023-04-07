import { TaskObject } from "components/MainControllerComponents/useMainHub";
import "./sideBarTaskStyle.css";

export default function SideBarTask({ taskText }: TaskObject) {
  return <div className="sideBarTask">{taskText}</div>;
}
