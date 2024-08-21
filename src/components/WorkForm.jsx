import "../styles/work.css";

import Icon from "@mdi/react";
import { mdiArrowDownBoldOutline } from "@mdi/js";

function WorkForm({
  work,
  handleWorkForm,
  handleClick,
  formToggles,
  updateFormToggles,
}) {
  if (!formToggles.work) {
    return (
      <>
        <div className="work-experience-container toggled">
          <div
            className="card toggled"
            onClick={() => updateFormToggles("work")}
          >
            <div className="header-toggle">
              <h2>Add Work Experience</h2>
              <Icon
                path={mdiArrowDownBoldOutline}
                size={1.5}
                style={{ color: "white", position: "relative", top: "4px" }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="work-experience-container">
      <div className="card" onClick={() => updateFormToggles("work")}>
        <div className="header-toggle">
          <h2>Add Work Experience</h2>
          <Icon
            path={mdiArrowDownBoldOutline}
            size={1.5}
            style={{ color: "white", position: "relative", top: "4px" }}
          />
        </div>
        <form action="" onClick={(e) => e.stopPropagation()}>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            id="company"
            onChange={handleWorkForm}
          />
          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            id="position"
            onChange={handleWorkForm}
          />
          <label htmlFor="start-date">Start Date</label>
          <input
            type="text"
            name="start-date"
            id="start-date"
            onChange={handleWorkForm}
          />
          <label htmlFor="end-date">End Date</label>
          <input
            type="text"
            name="end-date"
            id="end-date"
            onChange={handleWorkForm}
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            onChange={handleWorkForm}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={handleWorkForm}
          />
        </form>
        <button type="button" onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default WorkForm;
