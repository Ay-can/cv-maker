function EducationSection({ studies, updateStudy }) {
  const handleInput = (e, studyId, field) => {
    const updatedValue = e.target.textContent;
    console.log(studies);
    updateStudy(studyId, field, updatedValue);
  };

  return (
    <div className="education-section">
      <h2 className="section-header">Education</h2>
      {studies.map((study, index) => {
        return (
          <div key={study.id} className="education-block" data-index={index}>
            <div className="education-info">
              <div>
                <div className="school-year-container">
                  <p
                    contentEditable
                    onBlur={(e) => handleInput(e, study.id, "school")}
                    suppressContentEditableWarning
                    className="study-school"
                  >
                    {study.school}
                  </p>
                  <p>
                    {study.startYear} - {study.endYear} | {study.location}
                  </p>
                </div>
                <div className="degree-container">
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleInput(e, study.id, "degree")}
                  >
                    {study.degree}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EducationSection;
