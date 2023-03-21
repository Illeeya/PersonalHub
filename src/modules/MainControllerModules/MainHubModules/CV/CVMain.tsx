import "style/mainControllerModules/mainHubModules/CV/cvMainStyle.css";
import Skill from "./CsSubelements/Skill";

export default function CV() {
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
        <Skill skillName="CSS" />
        <Skill skillName="HTML" />
        <Skill skillName="C#" />
        <Skill skillName="Test1" />
        <Skill skillName="Test2" />
        <Skill skillName="Test3" />
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
