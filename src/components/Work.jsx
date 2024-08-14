import "../styles/work.css";

function Work({ work, handleWorkForm }) {
  return (
    <div className="work-experience-container">
      <div className="work-experience">
        <h2>Work Experience</h2>
        <form action="">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            id="company"
            value={work.company}
            onChange={handleWorkForm}
          />
          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            id="position"
            value={work.position}
            onChange={handleWorkForm}
          />
          <label htmlFor="start-date">Start Date</label>
          <input
            type="text"
            name="start-date"
            id="start-date"
            value={work.startDate}
            onChange={handleWorkForm}
          />
          <label htmlFor="end-date">End Date</label>
          <input
            type="text"
            name="end-date"
            id="end-date"
            value={work.endDate}
            onChange={handleWorkForm}
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={work.location}
            onChange={handleWorkForm}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={work.description}
            onChange={handleWorkForm}
          />
        </form>
      </div>
    </div>
  );
}

export default Work;
