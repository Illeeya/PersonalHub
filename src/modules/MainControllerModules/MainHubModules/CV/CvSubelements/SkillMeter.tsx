import { useEffect, useState } from "react";
import "style/mainControllerModules/mainHubModules/CV/skillMeterStyle.css";

interface IskillMeter {
  skillLevel: number;
}
export default function SkillMeter({ skillLevel }: IskillMeter) {
  const [skillLevelValue, setSkillLevelValue] = useState(skillLevel);
  const [meter, setMeter] = useState(fillMeter());

  useEffect(() => {
    setMeter(fillMeter());
  }, [skillLevelValue]);

  function fillMeter() {
    let meter = [];

    for (let i: number = 1; i <= 10; i++) {
      meter.push(
        <div
          className={
            i <= skillLevelValue
              ? "fillMeter meterCell"
              : "unfillMeter meterCell"
          }
        ></div>
      );
    }

    return meter;
  }

  function changeSkillLevelValue(change: string) {
    if (change === "+" && skillLevelValue < 10) {
      setSkillLevelValue((prev) => prev + 1);
    }
    if (change === "-" && skillLevelValue > 0) {
      setSkillLevelValue((prev) => prev - 1);
    }
  }

  return (
    <div className="skillMeterMainContainer">
      <button
        className="leftMeterButton meterButton"
        onClick={() => changeSkillLevelValue("-")}
      >
        -
      </button>
      <div className="skillMeter">{meter}</div>
      <button
        className="rightMeterButton meterButton"
        onClick={() => changeSkillLevelValue("+")}
      >
        +
      </button>
    </div>
  );
}
