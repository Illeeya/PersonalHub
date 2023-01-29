import { useState } from "react";

export const useMainPlanner = () => {
  const today: Date = new Date();
  const [plannerDisplay, setPlannerDisplay] = useState("DAILY");
  const [datePicked, setDatePicked] = useState(
    today.getFullYear() +
      "-" +
      ("0" + (today.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + today.getDate()).slice(-2)
  );

  return { plannerDisplay, setPlannerDisplay, datePicked, setDatePicked };
};
