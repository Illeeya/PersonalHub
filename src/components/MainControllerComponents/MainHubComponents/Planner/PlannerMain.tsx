import { useMainPlanner } from "./usePlannerMain";
import "./plannerMainStyle.css";
import PlannerSideBar from "./PlannerSideBar/PlannerSideBar";
import DisplayPicker from "./PlannerMainComponents/DisplayPicker";
import DatePicker from "./PlannerMainComponents/DatePicker";
import PlannerDisplay from "./PlannerMainComponents/PlannerDisplay";

export default function PlannerMain() {
  const {
    plannerDisplay,
    setPlannerDisplay,
    fullDatePicked,
    handleDateChange,
    pickerType,
    handleYearButtons,
  } = useMainPlanner();
  return (
    <div className="plannerMainContainer">
      <PlannerSideBar />

      <div className="plannerContainer">
        {DisplayPicker({ plannerDisplay, setPlannerDisplay })}

        {DatePicker({
          plannerDisplay,
          pickerType,
          fullDatePicked,
          handleDateChange,
          handleYearButtons,
        })}

        {PlannerDisplay({
          plannerDisplay,
          fullDatePicked,
          handleDateChange,
          setPlannerDisplay,
        })}
      </div>
    </div>
  );
}
