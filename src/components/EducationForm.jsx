import { useState } from "react";
import "../styles/education.css";

function EducationForm({ education, handleEducationForm, addStudy }) {
  return (
    <div className="education-container">
      <div className="card">
        <h2>Education</h2>
        <form action="">
          <label htmlFor="school">School</label>
          <input
            type="text"
            name="school"
            id="school"
            value={education.school}
            onChange={handleEducationForm}
          />
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree"
            value={education.degree}
            onChange={handleEducationForm}
          />
          <label htmlFor="start-date">Start Date</label>
          <input
            type="num"
            name="start-year"
            id="start-year"
            value={education.startYear}
            onChange={handleEducationForm}
          />
          <label htmlFor="start-date">End Date</label>
          <input
            type="num"
            name="end-year"
            id="end-year"
            value={education.endYear}
            onChange={handleEducationForm}
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={education.location}
            onChange={handleEducationForm}
          />
          <button type="button" onClick={addStudy}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default EducationForm;
