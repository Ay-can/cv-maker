import "../styles/education.css";

import Icon from "@mdi/react";
import { mdiArrowDownBoldOutline } from "@mdi/js";
import { useRef } from "react";

function EducationForm({
  handleEducationForm,
  addStudy,
  formToggles,
  updateFormToggles,
}) {
  const handleFormToggles = () => {
    updateFormToggles("education");
  };

  const formRef = useRef(null);

  if (!formToggles.education) {
    return (
      <>
        <div className="education-container toggled">
          <div className="card toggled" onClick={handleFormToggles}>
            <div className="header-toggle">
              <h2>Add Education</h2>
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
    <div className="education-container">
      <div className="card" onClick={handleFormToggles}>
        <div className="header-toggle">
          <h2 style={{ color: "#C03747" }}>Add Education</h2>
          <Icon
            path={mdiArrowDownBoldOutline}
            size={1.5}
            style={{ color: "#c03747", position: "relative", top: "4px" }}
          />
        </div>
        <form action="" onClick={(e) => e.stopPropagation()} ref={formRef}>
          <label htmlFor="school">School</label>
          <input
            type="text"
            name="school"
            id="school"
            onChange={handleEducationForm}
            required
          />
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree"
            onChange={handleEducationForm}
            required
          />
          <label htmlFor="start-date">Start Date</label>
          <input
            type="date"
            min="2000-01-01"
            name="start-year"
            id="start-year"
            onChange={handleEducationForm}
            required
          />
          <label htmlFor="start-date">End Date</label>
          <input
            type="date"
            min="2000-01-01"
            name="end-year"
            id="end-year"
            onChange={handleEducationForm}
            required
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            onChange={handleEducationForm}
            required
          />
        </form>
        <button
          type="button"
          onClick={(e) => {
            if (formRef.current.checkValidity()) {
              e.stopPropagation();
              addStudy();
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

export default EducationForm;
