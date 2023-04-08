import React from "react";
import { useMainPlanner } from "./usePlannerMain";
import "./plannerMainStyle.css";
import PlannerSideBar from "./PlannerSideBar/PlannerSideBar";

const DailyDisplay = React.lazy(() => import("./PlannerDisplays/DailyDisplay"));
const MonthlyDisplay = React.lazy(
  () => import("./PlannerDisplays/MonthlyDisplay")
);
const WeeklyDisplay = React.lazy(
  () => import("./PlannerDisplays/WeeklyDisplay")
);
const YearlyDisplay = React.lazy(
  () => import("./PlannerDisplays/YearlyDisplay")
);

interface IPlanner {
  jsxTasksArraySidebar: JSX.Element[];
}

export default function PlannerMain({ jsxTasksArraySidebar }: IPlanner) {
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
      <div className="plannerTasksSidebar">
        <PlannerSideBar jsxTasksArraySidebar={jsxTasksArraySidebar} />
      </div>
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
        {plannerDisplay !== "YEARLY" ? (
          <div className="datePickers">
            <input
              className="visiblePlannerDatePicker"
              id="visiblePlannerDatePicker"
              type={pickerType}
              value={
                fullDatePicked["year"] +
                "-" +
                fullDatePicked["month"] +
                "-" +
                fullDatePicked["day"]
              }
              onChange={(event) => {
                console.log(fullDatePicked);
                console.log(
                  fullDatePicked["year"] +
                    "-" +
                    fullDatePicked["month"] +
                    "-" +
                    fullDatePicked["day"]
                );
                handleDateChange(event.target.value);
              }}
            />
            {plannerDisplay === "MONTHLY" ? (
              <input
                type="month"
                className="monthInputOverlay"
                value={fullDatePicked["year"] + "-" + fullDatePicked["month"]}
              />
            ) : null}
            {/* <input
              className="visiblePlannerDatePicker"
              id="visiblePlannerDatePicker"
              type={pickerType}
              value={
                plannerDisplay === "MONTHLY"
                  ? fullDatePicked["year"] + "-" + fullDatePicked["month"]
                  : fullDatePicked["year"] +
                    "-" +
                    fullDatePicked["month"] +
                    "-" +
                    fullDatePicked["day"]
              }
              readOnly
            /> */}
          </div>
        ) : (
          <div className="datePickers">
            <button
              onClick={() => handleYearButtons("decrease")}
              className="plannerYearPickerButton decreaseButton"
            >
              -
            </button>
            <input
              className="plannerYearPicker"
              type="number"
              min={new Date().getFullYear() - 2}
              max={new Date().getFullYear() + 90}
              step={1}
              value={Number(fullDatePicked["year"])}
              onChange={(event) => {
                handleDateChange(event.target.value.toString());
              }}
              readOnly
            />
            <button
              onClick={() => handleYearButtons("increase")}
              className="plannerYearPickerButton increaseButton"
            >
              +
            </button>
          </div>
        )}
        {/* 
        
        
        
        
        */}
        {(() => {
          switch (plannerDisplay) {
            case "DAILY":
              return (
                <React.Suspense fallback={<div>Loading...</div>}>
                  <DailyDisplay />
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
        })()}
      </div>
    </div>
  );
}
