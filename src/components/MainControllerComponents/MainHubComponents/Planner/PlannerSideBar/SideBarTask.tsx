import "./sideBarTaskStyle.css";

interface ISideBarTask {
  taskID: number;
  taskText: string;
}
export default function SideBarTask({ taskText }: ISideBarTask) {
  return <div className="sideBarTask">{taskText}</div>;
}
