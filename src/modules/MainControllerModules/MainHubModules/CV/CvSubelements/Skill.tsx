import "style/mainControllerModules/mainHubModules/CV/skillMeterStyle.css";

import SkillMeter from "./SkillMeter";

interface SkillProps {
  skillName: string;
  skillLevel: number;
}

export default function Skill({ skillName, skillLevel }: SkillProps) {
  return (
    <div className="skillMainContainer">
      <p>{skillName}</p> <SkillMeter skillLevel={skillLevel} />
    </div>
  ); // classname='newModuleMainContainer'
}
