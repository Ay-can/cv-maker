import "../styles/project.css";

function ProjectForm({
  handleProjectForm,
  saveProjects,
  formToggles,
  updateFormToggles,
}) {
  if (!formToggles.projects) {
    return (
      <>
        <div className="projects-container toggled">
          <div className="card toggled">
            <div className="header-toggle">
              <h2>Projects</h2>
              <button
                onClick={() => updateFormToggles("projects")}
                type="button"
              >
                Toggle
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="project-container">
      <div className="card">
        <div className="header-toggle">
          <h2>Projects</h2>
          <button onClick={() => updateFormToggles("projects")} type="button">
            Toggle
          </button>
        </div>
        <form action="" id="project-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleProjectForm}
          />
          <label htmlFor="link">Link</label>
          <input
            type="text"
            name="link"
            id="link"
            onChange={handleProjectForm}
          />
          <label htmlFor="stack">Stack</label>
          <input
            type="input"
            name="stack"
            id="stack"
            onChange={handleProjectForm}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            onChange={handleProjectForm}
            form="project-form"
          ></textarea>
        </form>
        <button type="button" onClick={saveProjects}>
          Save
        </button>
      </div>
    </div>
  );
}

export default ProjectForm;
