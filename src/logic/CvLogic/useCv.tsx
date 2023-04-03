import Skill from "modules/MainControllerModules/MainHubModules/CV/CvSubelements/Skill";
import { useState } from "react";

export function useCv() {
  const [addingSkill, setAddingSkill] = useState(false);
  const [skillList, setSkillList] = useState<
    { skillName: string; skillLevel: number }[]
  >([]);
  const [skillObjects, setSkillObjects] = useState<JSX.Element[]>([]);

  function addNewSkill(skillName: string) {
    console.log("Adding new skill", skillName);
    setSkillList((current) => [
      ...current,
      { skillName: skillName, skillLevel: 0 },
    ]);
    setSkillObjects((current) => [
      ...current,
      <Skill
        key={skillName + Date.now()}
        skillName={skillName}
        skillLevel={0}
      />,
    ]);
    setAddingSkill(false);
  }

  return { addingSkill, setAddingSkill, skillObjects, addNewSkill };
}
