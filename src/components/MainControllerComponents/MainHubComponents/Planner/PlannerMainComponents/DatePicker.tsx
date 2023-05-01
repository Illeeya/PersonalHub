import { IDatePicked } from "types/IDatePicked";

type IDatePicker = {
  plannerDisplay: string;
  pickerType: string;
  fullDatePicked: IDatePicked;
  handleDateChange: (passedDate: string) => void;
  handleYearButtons: (operation: string) => void;
};

export default function DatePicker({
  plannerDisplay,
  pickerType,
  fullDatePicked,
  handleDateChange,
  handleYearButtons,
}: IDatePicker) {
  return plannerDisplay !== "YEARLY" ? (
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
  );
}
