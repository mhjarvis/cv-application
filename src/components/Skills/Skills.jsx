import Inputs from "../Inputs";
import "./Skills.css";

export default function Skills() {
    return (
        <div className="skills-container section-container">
            <h2 className="section-heading skills-heading">Skills</h2>
            <label htmlFor="skill-input">Skill</label>
            <Inputs type="text" placeholder="Enter skill" />
            <button className="skill-btn">Add Skill</button>
        </div>
    );
}
