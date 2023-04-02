import { useState } from "react";
import "style/mainControllerModules/mainHubModules/CV/cvMainStyle.css";

interface IaddNewSkills {
  handleAddNewSkill: (skillName: string) => void;
}

export default function AddNewSkill({ handleAddNewSkill }: IaddNewSkills) {
  const [skillNameValue, setSkillNameValue] = useState("");

  function handleSkillNameChange(skillName: string) {
    setSkillNameValue((current) => skillName);
  }

  const containerStyle = {
    width: "70%",
    display: "grid",
    gridTemplateColumns: "80% 20%",
    placeItems: "center",
  };

  const inputStyle = {
    width: "100%",
    height: "100%",
    fontSize: "1.2rem",
    padding: "1rem",
    borderBottomLeftRadius: "500px",
    borderTopLeftRadius: "500px",
    border: "none",
    backgroundColor: "grey",
  };

  const buttonStyle = {
    borderRadius: "unset",
    fontSize: "1rem",
    borderTopRightRadius: "500px",
    borderBottomRightRadius: "500px",
    width: "100%",
    height: "100%",
    padding: "0",
  };

  return (
    <div className="appear" style={containerStyle}>
      <input
        onChange={(event) => handleSkillNameChange(event.target.value)}
        value={skillNameValue}
        style={inputStyle}
        type={"text"}
      />
      <button
        onClick={() => handleAddNewSkill(skillNameValue)}
        style={buttonStyle}
      >
        ADD
      </button>
    </div>
  ); // classname='newModuleMainContainer'
}
