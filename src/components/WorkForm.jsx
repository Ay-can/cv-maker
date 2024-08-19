import "../styles/work.css";

function WorkForm({ work, handleWorkForm, handleClick }) {
  return (
    <div className="work-experience-container">
      <div className="card">
        <h2>Work Experience</h2>
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
          <button type="button" onClick={handleClick}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default WorkForm;
