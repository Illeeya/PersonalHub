import { useState } from "react";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export function useDailyDisplay() {
  const dailyTasks: JSX.Element[] = [];

  for (let i = 4; i <= 23; i++) {
    dailyTasks.push(
      <label
        key={"hour" + i}
        htmlFor={"hour" + i}
        className="hourTaskContainer"
      >
        <p>{("0" + i).slice(-2) + ":00"}</p>
        <input type="text" id={"hour" + i} maxLength={30} />
      </label>
    );
  }

  return { dailyTasks };
}

export function useWeeklyDisplay() {
  const weeklyTasks: JSX.Element[] = [];

  for (let i = 0; i < 7; i++) {
    weeklyTasks.push(
      <label
        htmlFor={"day" + i}
        key={"day" + i}
        className="weeklyTaskContainer"
      >
        <p>{weekDays[i]}:</p>
        <input type="text" id={"day" + i} />
      </label>
    );
  }

  return { weeklyTasks };
}

export interface monthlyDisplayProps {
  selectedDateProp: string;
}
export function useMonthlyDisplay(passedDate: string) {
  //const [selectedDate, setSelectedDate] = useState(passedDate);

  const passedYear: number = Number(passedDate.split("-")[0]);
  const passedMonth: number = Number(passedDate.split("-")[1]);

  const firstDay: number = new Date(passedYear, passedMonth - 1, 1).getUTCDay();
  const daysInMonth: number = new Date(passedYear, passedMonth, 0).getDate();
  const daysArray: JSX.Element[] = [];

  let weekdayCounter = 0;

  for (let i = 0; i < 42; i++) {
    if (i >= firstDay && i < daysInMonth + firstDay) {
      daysArray.push(
        <div className="realDay monthlyDayCell" key={"monthDay" + i}>
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

  // function test() {
  //   alert(dateValue.getUTCDay());
  // }

  return { daysArray, firstDay };
}
