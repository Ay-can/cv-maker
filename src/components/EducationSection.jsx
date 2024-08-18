import "../styles/education.css";

function EducationSection({ studies, updateStudy }) {
  const handleInput = (e, studyId, field) => {
    // In case of a date, don't append the '-' symbol to the updated state obj
    const updatedValue = e.target.textContent;
    updateStudy(studyId, field, updatedValue);
  };

  return (
    <div className="education-section">
      <h2 className="section-header">Education</h2>
      {studies.map((study, index) => {
        return (
          <div key={study.id} className="education-block" data-index={index}>
            <div className="education-info">
              <div className="school-degree">
                <p
                  contentEditable
                  onBlur={(e) => handleInput(e, study.id, "school")}
                  suppressContentEditableWarning
                  className="study-school"
                >
                  {study.school}
                </p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleInput(e, study.id, "degree")}
                >
                  {study.degree}
                </p>
              </div>

              <div className="study-year-location">
                <p
                  className="study-start-year"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleInput(e, study.id, "startYear")}
                >
                  {study.startYear}
                </p>
                <p className="seperator">-</p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleInput(e, study.id, "endYear")}
                >
                  {study.endYear}
                </p>
                <p className="seperator">|</p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="study-location"
                  onBlur={(e) => handleInput(e, study.id, "location")}
                >
                  {study.location}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EducationSection;
