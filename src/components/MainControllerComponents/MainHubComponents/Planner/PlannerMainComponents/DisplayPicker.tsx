type IDisplayPicker = {
  plannerDisplay: string;
  setPlannerDisplay: (display: string) => void;
};

export default function DisplayPicker({
  plannerDisplay,
  setPlannerDisplay,
}: IDisplayPicker) {
  return (
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
  );
}
