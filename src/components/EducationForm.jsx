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
