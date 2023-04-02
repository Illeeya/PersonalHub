import { useState } from "react";
import "style/mainControllerModules/mainHubModules/CV/cvMainStyle.css";
import AddNewSkill from "./CvSubelements/AddNewSkill";
import Skill from "./CvSubelements/Skill";

export default function CV() {
  const [addingSkill, setAddingSkill] = useState(false);
  const [skillList, setSkillList] = useState<
    { skillName: string; skillLevel: number }[]
  >([]);
  const [skillObjects, setSkillObjects] = useState<JSX.Element[]>([]);

  const addingStyle = {
    width: "4rem",
    height: "4rem",
    lineHeight: "2rem",
    fontSize: "2rem",
  };

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
        skillName={skillName + Date.now()}
        skillLevel={0}
      />,
    ]);
  }

  return (
    <div className="CvMainContainer">
      <h2>Personal Info</h2>

      <div className="personalInfoContainer">
        <p>🙍‍♂️ First name...</p>
        <p>🙎‍♂️ Last name...</p>
        <p>🏠 Citykistan</p>
        <p>📞 111-222-333</p>
        <p>📧 test@tester.com</p>
        <p>🌐 www.testerweb.com</p>
      </div>

      <h2>Skills</h2>
      <div className="skillsContainer">
        {skillObjects}
        {addingSkill ? (
          <AddNewSkill handleAddNewSkill={addNewSkill} />
        ) : (
          <button style={addingStyle} onClick={() => setAddingSkill(true)}>
            +
          </button>
        )}
      </div>
      <h2>Experience</h2>
      <div className="educationContainer"></div>
      <h2>Education</h2>
      <div className="experienceContainer"></div>
      <h2>Others</h2>
      <div className="othersContainer"></div>
    </div>
  );
}
