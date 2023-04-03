import { useState } from "react";
import "style/mainControllerModules/mainHubModules/CV/newSkillModalStyle.css";

interface InewSkillModal {
  cancel: () => void;
  addSkill: (skillName: string) => void;
}
export default function NewSkillModal({ cancel, addSkill }: InewSkillModal) {
  const [skillName, setSkillName] = useState("");

  return (
    <div className="newSkillModalContainer">
      <div className="newSkillInnerContainer">
        <input
          placeholder="Skill name..."
          className="newSkillInput"
          type="text"
          onChange={(event) => {
            setSkillName((current) => event.target.value);
          }}
          value={skillName}
        />
        <button
          onClick={() => addSkill(skillName)}
          className="newSkillButton AddBtn"
        >
          Add
        </button>
        <button onClick={() => cancel()} className="newSkillButton CancelBtn">
          Cancel
        </button>
      </div>
    </div>
  ); // classname='newModuleMainContainer'
}
