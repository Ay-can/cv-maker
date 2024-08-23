import "../styles/work.css";

import Icon from "@mdi/react";
import { mdiArrowDownBoldOutline } from "@mdi/js";
import { useRef } from "react";

function WorkForm({
  handleWorkForm,
  handleClick,
  formToggles,
  updateFormToggles,
}) {
  const formRef = useRef(null);

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
          <h2 style={{ color: "#C03747" }}>Add Work Experience</h2>
          <Icon
            path={mdiArrowDownBoldOutline}
            size={1.5}
            style={{ color: "#c03747", position: "relative", top: "4px" }}
          />
        </div>
        <form action="" onClick={(e) => e.stopPropagation()} ref={formRef}>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            id="company"
            onChange={handleWorkForm}
            required
          />
          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            id="position"
            onChange={handleWorkForm}
            required
          />
          <label htmlFor="start-date">Start Date</label>
          <input
            type="date"
            min="2000-01-01"
            name="start-date"
            id="start-date"
            onChange={handleWorkForm}
            required
          />
          <label htmlFor="end-date">End Date</label>
          <input
            type="date"
            min="2000-01-01"
            id="end-date"
            onChange={handleWorkForm}
            required
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            onChange={handleWorkForm}
            required
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={handleWorkForm}
            required
          />
        </form>
        <button
          type="button"
          onClick={(e) => {
            if (formRef.current.checkValidity()) {
              e.stopPropagation();
              handleClick();
            } else {
              formRef.current.reportValidity();
              e.stopPropagation();
            }
          }}
          className="form-btn"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default WorkForm;
