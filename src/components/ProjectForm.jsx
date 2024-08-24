import "../styles/project.css";

import Icon from "@mdi/react";
import { mdiArrowDownBoldOutline } from "@mdi/js";
import { useRef } from "react";

function ProjectForm({
  handleProjectForm,
  saveProjects,
  formToggles,
  updateFormToggles,
}) {
  const formRef = useRef(null);

  if (!formToggles.projects) {
    return (
      <>
        <div className="projects-container toggled">
          <div
            className="card toggled"
            onClick={() => updateFormToggles("projects")}
          >
            <div className="header-toggle">
              <h2>Add Projects</h2>
              <Icon
                path={mdiArrowDownBoldOutline}
                size={1.5}
                style={{ color: "white" }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="projects-container">
      <div className="card" onClick={() => updateFormToggles("projects")}>
        <div className="header-toggle">
          <h2 style={{ color: "#C03747" }}>Add Projects</h2>
          <Icon
            path={mdiArrowDownBoldOutline}
            size={1.5}
            style={{ color: "#c03747" }}
          />
        </div>
        <form
          action=""
          id="project-form"
          onClick={(e) => e.stopPropagation()}
          ref={formRef}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleProjectForm}
            required
          />
          <label htmlFor="link">Link</label>
          <input
            type="text"
            name="link"
            id="link"
            onChange={handleProjectForm}
            required
          />
          <label htmlFor="stack">Stack</label>
          <input
            type="input"
            name="stack"
            id="stack"
            onChange={handleProjectForm}
            required
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            onChange={handleProjectForm}
            form="project-form"
            required
          ></textarea>
        </form>
        <button
          type="button"
          onClick={(e) => {
            if (formRef.current.checkValidity()) {
              e.stopPropagation();
              saveProjects();
            } else {
              formRef.current.reportValidity();
              e.stopPropagation();
            }
          }}
          className="form-btn"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ProjectForm;
