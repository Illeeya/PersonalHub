import { useMainPlanner } from "../../../../logic/PlannerLogic/PlannerMainLogic";
import "../../../../style/mainControllerModules/mainHubModules/Planner/plannerMainStyle.css";
import DailyDisplay from "./PlannerDisplays/DailyDisplay/DailyDisplay";
import MonthlyDisplay from "./PlannerDisplays/DailyDisplay/MonthlyDisplay";
import WeeklyDisplay from "./PlannerDisplays/DailyDisplay/WeeklyDisplay";
export default function PlannerMain() {
  const { plannerDisplay, setPlannerDisplay, datePicked, setDatePicked } =
    useMainPlanner();
  return (
    <div className="plannerMainContainer">
      <div className="plannerTasksSidebar">There will be tasks</div>
      <div className="plannerContainer">
        <div className="plannerDisplayPicker">
          <button
            className={plannerDisplay === "DAILY" ? "selectedDisplay" : ""}
            onClick={() => {
              setPlannerDisplay("DAILY");
            }}
          >
            DAILY
          </button>
          <button
            className={plannerDisplay === "WEEKLY" ? "selectedDisplay" : ""}
            onClick={() => {
              setPlannerDisplay("WEEKLY");
            }}
          >
            WEEKLY
          </button>
          <button
            className={plannerDisplay === "MONTHLY" ? "selectedDisplay" : ""}
            onClick={() => {
              setPlannerDisplay("MONTHLY");
            }}
          >
            MONTHLY
          </button>
          <button
            className={plannerDisplay === "YEARLY" ? "selectedDisplay" : ""}
            onClick={() => {
              setPlannerDisplay("YEARLY");
            }}
          >
            YEARLY
          </button>
        </div>
        <div className="datePickers">
          <input
            className="invisiblePlannerDatePicker"
            id="invisiblePlannerDatePicker"
            type="date"
            value={datePicked}
            onChange={(event) => {
              setDatePicked(event.target.value);
            }}
          />
          <input
            className="visiblePlannerDatePicker"
            id="visiblePlannerDatePicker"
            type="date"
            value={datePicked}
            readOnly
          />
        </div>
        {(() => {
          switch (plannerDisplay) {
            case "DAILY":
              return <DailyDisplay />;
            case "WEEKLY":
              return <WeeklyDisplay />;
            case "MONTHLY":
              return <MonthlyDisplay selectedDateProp={datePicked} />;
            case "YEARLY":
              return <div>YEARLY</div>;
            default:
              break;
          }
        })()}
      </div>
    </div>
  );
}
