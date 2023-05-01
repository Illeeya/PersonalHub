import React from "react";
import { IDatePicked } from "types/IDatePicked";
import DailyDisplay from "../PlannerDisplays/1Daily/DailyDisplay";
import MonthlyDisplay from "../PlannerDisplays/3Monthly/MonthlyDisplay";
import WeeklyDisplay from "../PlannerDisplays/2Weekly/WeeklyDisplay";
import YearlyDisplay from "../PlannerDisplays/4Yearly/YearlyDisplay";

type IPlannerDisplay = {
  plannerDisplay: string;
  fullDatePicked: IDatePicked;
  handleDateChange: (passedDate: string) => void;
  setPlannerDisplay: (display: string) => void;
};

function tester(id: number, sort: number) {
  console.log("Eh");
}
export default function PlannerDisplay({
  plannerDisplay,
  fullDatePicked,
  handleDateChange,
  setPlannerDisplay,
}: IPlannerDisplay) {
  switch (plannerDisplay) {
    case "DAILY":
      return (
        <React.Suspense fallback={<div>Loading...</div>}>
          <DailyDisplay
            date={
              fullDatePicked["year"] +
              "-" +
              fullDatePicked["month"] +
              "-" +
              fullDatePicked["day"]
            }
            tester={tester}
          />
        </React.Suspense>
      );
    case "WEEKLY":
      return (
        <React.Suspense fallback={<div>Loading...</div>}>
          <WeeklyDisplay
            selectedDateProp={
              fullDatePicked["year"] +
              "-" +
              fullDatePicked["month"] +
              "-" +
              fullDatePicked["day"]
            }
            dayChange={handleDateChange}
            displayChange={setPlannerDisplay}
          />
        </React.Suspense>
      );
    case "MONTHLY":
      return (
        <React.Suspense fallback={<div>Loading...</div>}>
          <MonthlyDisplay
            selectedDateProp={
              fullDatePicked["year"] +
              "-" +
              fullDatePicked["month"] +
              "-" +
              fullDatePicked["day"]
            }
            dayChange={handleDateChange}
            displayChange={setPlannerDisplay}
          />
        </React.Suspense>
      );
    case "YEARLY":
      return (
        <React.Suspense fallback={<div>Loading...</div>}>
          <YearlyDisplay
            monthChange={handleDateChange}
            displayChange={setPlannerDisplay}
            pickedYear={fullDatePicked.year}
          />
        </React.Suspense>
      );
    default:
      break;
  }
}
