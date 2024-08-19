import "../styles/project.css";

function ProjectForm({ projectForm, handleProjectForm, saveProjects }) {
  return (
    <div className="project-container">
      <div className="card">
        <h2>Projects</h2>
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
