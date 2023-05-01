import React from "react";
import { useState } from "react";
import { IDatePicked } from "types/IDatePicked";

const DailyDisplay = React.lazy(
  () => import("./PlannerDisplays/1Daily/DailyDisplay")
);
const MonthlyDisplay = React.lazy(
  () => import("./PlannerDisplays/3Monthly/MonthlyDisplay")
);
const WeeklyDisplay = React.lazy(
  () => import("./PlannerDisplays/2Weekly/WeeklyDisplay")
);
const YearlyDisplay = React.lazy(
  () => import("./PlannerDisplays/4Yearly/YearlyDisplay")
);

export const useMainPlanner = () => {
  const today: Date = new Date();

  const pickerTypes: Record<string, string> = {
    DAILY: "date",
    WEEKLY: "date",
    MONTHLY: "date",
    YEARLY: "number",
  };
  const [plannerDisplay, setPlannerDisplay] = useState<string>("DAILY");
  const [fullDatePicked, setFullDatePicked] = useState<IDatePicked>(() => {
    return {
      year: today.getFullYear().toString(),
      month: ("0" + (today.getMonth() + 1)).slice(-2),
      day: ("0" + today.getDate()).slice(-2),
    };
  });

  function handleYearButtons(operation: string) {
    operation === "increase"
      ? handleDateChange((Number(fullDatePicked.year) + 1).toString())
      : handleDateChange((Number(fullDatePicked.year) - 1).toString());
  }

  function handlePlannerDisplayChange(display: string) {
    setPlannerDisplay(display);
  }

  function handleDateChange(passedDate: string) {
    // console.log("handleDateChange called with argument", passedDate);
    const dateParts: string[] = passedDate.split("-");
    let year_: string = dateParts[0];
    const month_: string = dateParts[1] ? dateParts[1] : fullDatePicked.month;
    const day_: string = dateParts[2] ? dateParts[2] : fullDatePicked.day;
    if (
      Number(year_) < Number(today.getFullYear()) - 2 ||
      Number(year_) > Number(today.getFullYear()) + 90
    ) {
      year_ = fullDatePicked.year;
    }
    setFullDatePicked({ year: year_, month: month_, day: day_ });
    // console.log("Finished");
  }

  const pickerType = pickerTypes[plannerDisplay];

  return {
    plannerDisplay,
    setPlannerDisplay,
    fullDatePicked,
    handleDateChange,
    pickerType,
    handleYearButtons,
    handlePlannerDisplayChange,
  };
};
