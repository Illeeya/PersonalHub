import "./sideBarTaskStyle.css";

interface ISideBarTask {
  taskID: number;
  taskText: string;
  startTime: Date;
  endTime: Date;
}
export default function SideBarTask({
  taskText,
  startTime,
  endTime,
}: ISideBarTask) {
  return (
    <div
      onClick={() => alert(`${startTime} - ${endTime}`)}
      className="sideBarTask"
    >
      {taskText}
    </div>
  );
}
