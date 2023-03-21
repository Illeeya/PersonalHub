import { useEffect, useState } from "react";
import "style/mainControllerModules/mainHubModules/CV/skillMeterStyle.css";

export default function SkillMeter() {
  const [skillLevel, setSkillLevel] = useState(0);
  const [meter, setMeter] = useState(fillMeter());

  useEffect(() => {
    setMeter(fillMeter());
  }, [skillLevel]);

  function fillMeter() {
    let meter = [];

    for (let i: number = 1; i <= 10; i++) {
      meter.push(
        <div
          className={
            i <= skillLevel ? "fillMeter meterCell" : "unfillMeter meterCell"
          }
        ></div>
      );
    }

    return meter;
  }

  function changeSkillLevel(change: string) {
    if (change === "+" && skillLevel < 10) {
      setSkillLevel((prev) => prev + 1);
    }
    if (change === "-" && skillLevel > 0) {
      setSkillLevel((prev) => prev - 1);
    }
  }

  return (
    <div className="skillMeterMainContainer">
      <button
        className="leftMeterButton meterButton"
        onClick={() => changeSkillLevel("-")}
      >
        -
      </button>
      <div className="skillMeter">{meter}</div>
      <button
        className="rightMeterButton meterButton"
        onClick={() => changeSkillLevel("+")}
      >
        +
      </button>
    </div>
  );
}
