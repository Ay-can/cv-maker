import "../styles/skills.css";

function SkillsForm({
  skillsForm,
  handleSkillsForm,
  formToggles,
  updateFormToggles,
}) {
  if (!formToggles.skills) {
    return (
      <>
        <div className="skills-container toggled">
          <div className="card toggled">
            <div className="header-toggle">
              <h2>Skills</h2>
              <button onClick={() => updateFormToggles("skills")} type="button">
                Toggle
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="skills-container">
      <div className="card">
        <div className="header-toggle">
          <h2>Skills</h2>
          <button onClick={() => updateFormToggles("skills")} type="button">
            Toggle
          </button>
        </div>
        <form action="">
          <label htmlFor="programming-languages">Programming Languages</label>
          <input
            type="text"
            name="programming-languages"
            id="programming-languages"
            value={skillsForm["programming-languages"]}
            onChange={handleSkillsForm}
          />
          <label htmlFor="libraries-frameworks">Libraries/Frameworks</label>
          <input
            type="text"
            name="libraries-frameworks"
            id="libraries-frameworks"
            value={skillsForm["libraries-frameworks"]}
            onChange={handleSkillsForm}
          />
          <label htmlFor="tools-platforms">Tools/Platforms</label>
          <input
            type="num"
            name="tools-platforms"
            id="tools-platforms"
            value={skillsForm["tools-platforms"]}
            onChange={handleSkillsForm}
          />
          <label htmlFor="databases">Databases</label>
          <input
            type="text"
            name="databases"
            id="databases"
            value={skillsForm.databases}
            onChange={handleSkillsForm}
          />
        </form>
      </div>
    </div>
  );
}

export default SkillsForm;
