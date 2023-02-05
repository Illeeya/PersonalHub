import { useEffect, useState } from "react";

export const useMainPlanner = () => {
  const today: Date = new Date();

  const pickerTypes: Record<string, string> = {
    DAILY: "date",
    WEEKLY: "date",
    MONTHLY: "month",
    YEARLY: "number",
  };
  const [plannerDisplay, setPlannerDisplay] = useState("DAILY");
  const [fullDatePicked, setFullDatePicked] = useState({
    year: today.getFullYear().toString(),
    month: ("0" + (today.getMonth() + 1)).slice(-2),
    day: ("0" + today.getDate()).slice(-2),
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
    console.log("handleDateChange called with argument", passedDate);
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
    console.log("Finished");
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
