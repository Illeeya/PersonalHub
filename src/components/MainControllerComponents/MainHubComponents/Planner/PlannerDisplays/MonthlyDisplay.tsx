import { useMonthlyDisplay } from "./usePlannerDisplays";
import "./monthlyDisplayStyle.css";

export interface IMonthlyDisplay {
  selectedDateProp: string;

  dayChange: (day: string) => void;
  displayChange: (display: string) => void;
}
export default function MonthlyDisplay({
  selectedDateProp,
  dayChange,
  displayChange,
}: IMonthlyDisplay) {
  /////////////////////////////
  const { daysArray, firstDay } = useMonthlyDisplay(
    selectedDateProp,
    dayChange,
    displayChange
  );
  return <div className="monthlyDisplayContainer">{daysArray}</div>;
}
