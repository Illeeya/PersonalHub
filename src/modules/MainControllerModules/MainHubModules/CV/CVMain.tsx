import { useCv } from "logic/CvLogic/useCv";
import { useState } from "react";
import "style/mainControllerModules/mainHubModules/CV/cvMainStyle.css";
import NewSkillModal from "./CvSubelements/NewSkillModal";
import Skill from "./CvSubelements/Skill";

export default function CV() {
  const { addingSkill, setAddingSkill, skillObjects, addNewSkill } = useCv();

  return (
    <div className="CvMainContainer">
      {addingSkill ? (
        <NewSkillModal
          addSkill={addNewSkill}
          cancel={() => setAddingSkill(false)}
        />
      ) : null}
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
        <button className="skillAddButton" onClick={() => setAddingSkill(true)}>
          +
        </button>
        {/* <AddNewSkill handleAddNewSkill={addNewSkill} /> */}
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
