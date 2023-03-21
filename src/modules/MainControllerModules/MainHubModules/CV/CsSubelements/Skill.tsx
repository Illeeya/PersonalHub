import "style/mainControllerModules/mainHubModules/CV/skillMeterStyle.css";

import SkillMeter from "./SkillMeter";

interface SkillProps {
  skillName: string;
}

export default function Skill({ skillName }: SkillProps) {
  return (
    <div className="skillMainContainer">
      <p>{skillName}</p> <SkillMeter />
    </div>
  ); // classname='newModuleMainContainer'
}
