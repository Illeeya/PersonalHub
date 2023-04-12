import "./sideBarTaskStyle.css";

interface ISideBarTask {
  taskID: number;
  taskText: string;
  startTime: Date;
  endTime: Date;
  sortNumber: Number | null;
}
export default function SideBarTask({
  taskText,
  startTime,
  endTime,
  sortNumber,
}: ISideBarTask) {
  return (
    <div
      onClick={() => alert(`${startTime} - ${endTime} - ${sortNumber}`)}
      className="sideBarTask"
    >
      {taskText + sortNumber}
    </div>
  );
}
