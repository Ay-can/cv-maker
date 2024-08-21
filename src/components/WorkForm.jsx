import "../styles/work.css";

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
          <div className="card toggled">
            <div className="header-toggle">
              <h2>Add Work Experience</h2>
              <button onClick={() => updateFormToggles("work")} type="button">
                Toggle
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="work-experience-container">
      <div className="card">
        <div className="header-toggle">
          <h2>Add Work Experience</h2>
          <button onClick={() => updateFormToggles("work")} type="button">
            Toggle
          </button>
        </div>
        <form action="">
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
