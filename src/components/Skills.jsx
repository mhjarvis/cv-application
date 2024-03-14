export default function Skills() {
    return (
        <div className="skills-container">
            <h2 className="skills-heading">Skills</h2>
            <label htmlFor="skill-input">Skill</label>
            <input type="text" placeholder="Enter skill" />
            <button className="skill-btn">Add Skill</button>
        </div>
    );
}
