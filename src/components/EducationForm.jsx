import "../styles/education.css";

import Icon from "@mdi/react";
import { mdiArrowDownBoldOutline } from "@mdi/js";

function EducationForm({
  handleEducationForm,
  addStudy,
  formToggles,
  updateFormToggles,
}) {
  const handleFormToggles = () => {
    updateFormToggles("education");
  };

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
          <h2>Add Education</h2>
          <Icon
            path={mdiArrowDownBoldOutline}
            size={1.5}
            style={{ color: "white", position: "relative", top: "4px" }}
          />
        </div>
        <form action="">
          <label htmlFor="school">School</label>
          <input
            type="text"
            name="school"
            id="school"
            onChange={handleEducationForm}
          />
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree"
            onChange={handleEducationForm}
          />
          <label htmlFor="start-date">Start Date</label>
          <input
            type="num"
            name="start-year"
            id="start-year"
            onChange={handleEducationForm}
          />
          <label htmlFor="start-date">End Date</label>
          <input
            type="num"
            name="end-year"
            id="end-year"
            onChange={handleEducationForm}
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            onChange={handleEducationForm}
          />
        </form>
        <button type="button" onClick={addStudy}>
          Add
        </button>
      </div>
    </div>
  );
}

export default EducationForm;
