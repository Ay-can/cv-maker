import "../styles/skills.css";

function SkillsSection({ skills }) {
  return (
    <>
      <div className="skills-section">
        <h2 className="section-header">Skills</h2>
        <div className="skill">
          <p className="skill-title">Programming Languages</p>
          <p>{skills["programming-languages"]}</p>
        </div>

        <div className="skill">
          <p className="skill-title">Libraries/Frameworks</p>
          <p>{skills["libraries-frameworks"]}</p>
        </div>
        <div className="skill">
          <p className="skill-title">Tools/Platforms</p>
          <p>{skills["tools-platforms"]}</p>
        </div>
        <div className="skill">
          <p className="skill-title">Databases</p>
          <p>{skills.databases}</p>
        </div>
      </div>
    </>
  );
}

export default SkillsSection;
