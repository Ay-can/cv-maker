import "../styles/project.css";

function ProjectSection({ projects }) {
  return (
    <>
      <div className="project-section">
        <h2 className="section-header">Project</h2>
        {projects.map((project) => {
          return (
            <div key={project.id} className="project-block">
              <div className="project-info-container">
                <p className="project-info">
                  {project.name} | {project.link}
                </p>
                <p>{project.stack}</p>
              </div>
              <div className="project-description-container">
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProjectSection;
