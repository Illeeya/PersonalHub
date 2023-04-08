import { useYearlyDisplay } from "./usePlannerDisplays";
import "./yearlyDisplayStyle.css";

export interface IYearlyDisplay {
  monthChange: (month: string) => void;
  displayChange: (display: string) => void;
  pickedYear: string;
}
export default function YearlyDisplay({
  monthChange,
  displayChange,
  pickedYear,
}: IYearlyDisplay) {
  const monthCells = useYearlyDisplay(monthChange, displayChange, pickedYear);
  return <div className="yearlyDisplayContainer">{monthCells}</div>;
}
