import DailyTasksContainer from "./DailyTasksContainer";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export function useDailyDisplay(
  curentDate: string,
  tester: (id: number, sort: number) => void
) {
  const dailyTasks: JSX.Element[] = [];

  for (let i = 4; i <= 23; i++) {
    dailyTasks.push(
      <label
        key={"hour" + i}
        htmlFor={"hour" + i}
        className="hourTaskContainer"
      >
        <p>{("0" + i).slice(-2) + ":00"}</p>
        <DailyTasksContainer date={curentDate} hour={i} tester={tester} />
      </label>
    );
  }

  return { dailyTasks };
}

export function useWeeklyDisplay(
  curentDate: string,
  dayChange: (day: string) => void,
  displayChange: (display: string) => void
) {
  const weeklyTasks: JSX.Element[] = [];

  const date_ = new Date(curentDate);
  const dayOfWeek = date_.getUTCDay() === 0 ? 6 : date_.getUTCDay() - 1;
  date_.setDate(date_.getDate() - dayOfWeek); //set date to first day of week

  for (let i = 0; i < 7; i++) {
    let dayFullDate = date_.toISOString().split("T")[0];
    weeklyTasks.push(
      <div
        //htmlFor={"day" + i}
        key={"day" + i}
        id={dayFullDate}
        className="weeklyTaskContainer"
      >
        <div
          onClick={() => {
            handleDaySelect(dayFullDate);
          }}
        >
          {("0" + date_.getUTCDate()).slice(-2) + " | " + weekDays[i]}:
        </div>
        <input type="text" id={"day" + i} />
      </div>
    );

    date_.setDate(date_.getDate() + 1);
  }

  function handleDaySelect(date: string) {
    dayChange(date);
    displayChange("DAILY");
  }

  return { weeklyTasks };
}

export function useMonthlyDisplay(
  passedDate: string,
  dayChange: (day: string) => void,
  displayChange: (display: string) => void
) {
  const passedYear: number = Number(passedDate.split("-")[0]);
  const passedMonth: number = Number(passedDate.split("-")[1]);

  const firstDay: number = new Date(passedYear, passedMonth - 1, 1).getUTCDay();
  const daysInMonth: number = new Date(passedYear, passedMonth, 0).getDate();
  const daysArray: JSX.Element[] = [];

  let weekdayCounter = 0;

  for (let i = 0; i < 42; i++) {
    if (i >= firstDay && i < daysInMonth + firstDay) {
      daysArray.push(
        <div
          onClick={() => handleDaySelect(i - firstDay + 1)}
          className="realDay monthlyDayCell"
          key={"monthDay" + i}
        >
          {i - firstDay + 1} - {weekDays[weekdayCounter]}
        </div>
      );
    } else {
      daysArray.push(
        <div className="monthlyDayCell" key={"monthDay" + i}></div>
      );
    }
    if (weekdayCounter == 6) weekdayCounter -= 7;
    weekdayCounter++;
  }

  function handleDaySelect(day: number) {
    dayChange(
      `${passedYear}-${passedDate.split("-")[1]}-${("0" + day).slice(-2)}`
    );
    displayChange("DAILY");
  }

  return { daysArray, firstDay };
}

export function useYearlyDisplay(
  monthChange: (month: string) => void,
  displayChange: (display: string) => void,
  pickedYear: string
) {
  const monthsList: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthCells: JSX.Element[] = monthsList.map(
    (month: string, index: number) => (
      <div
        onClick={() => {
          handleMonthSelect(index);
        }}
        id={month + "MonthCell"}
      >
        {month}
      </div>
    )
  );

  function handleMonthSelect(month: number) {
    monthChange(`${pickedYear}-${("0" + (month + 1)).slice(-2)}`);
    displayChange("MONTHLY");
  }

  return monthCells;
}
