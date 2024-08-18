import "../styles/skills.css";

function SkillsSection({ skills, updateSkills }) {
  return (
    <>
      <div className="skills-section">
        <h2 className="section-header">Skills</h2>
        <div className="skill-block">
          <div className="skill">
            <p className="skill-title">Programming Languages</p>
            <p
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                updateSkills("programming-languages", e.target.textContent)
              }
            >
              {skills["programming-languages"]}
            </p>
          </div>

          <div className="skill">
            <p className="skill-title">Libraries / Frameworks</p>
            <p
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                updateSkills("libraries-frameworks", e.target.textContent)
              }
            >
              {skills["libraries-frameworks"]}
            </p>
          </div>
          <div className="skill">
            <p className="skill-title">Tools / Platforms</p>
            <p
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                updateSkills("tools-platforms", e.target.textContent)
              }
            >
              {skills["tools-platforms"]}
            </p>
          </div>
          <div className="skill">
            <p className="skill-title">Databases</p>
            <p
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => updateSkills("skill-title", e.target.textContent)}
            >
              {skills.databases}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsSection;
