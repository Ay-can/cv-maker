import "../styles/project.css";

function ProjectSection({ projects, updateProjects }) {
  const handleInput = (e, projectId, field) => {
    const updatedValue = e.target.textContent;
    updateProjects(projectId, field, updatedValue);
  };

  return (
    <>
      <div className="project-section">
        <h2 className="section-header">Projects</h2>
        {projects.map((project) => {
          return (
            <div key={project.id} className="project-block">
              <div className="project-info-container">
                <div className="project-name-link-container">
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleInput(e, project.id, "name")}
                  >
                    {project.name}
                  </p>
                  <p className="seperator"> | </p>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleInput(e, project.id, "link")}
                  >
                    {project.link}
                  </p>
                </div>
                <div className="project-stack-info-container">
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleInput(e, project.id, "stack")}
                  >
                    {project.stack}
                  </p>
                </div>
              </div>
              <div className="project-description-container">
                <p
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleInput(e, project.id, "description")}
                >
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProjectSection;
