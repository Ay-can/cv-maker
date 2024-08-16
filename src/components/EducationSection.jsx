function EducationSection({ studies }) {
  return (
    <div className="education-section">
      <h2 className="section-header">Education</h2>
      {studies.map((study, index) => {
        return (
          <div
            key={study.id}
            className="education-block"
            data-index={index}
            onClick={(e) => console.log(e)}
          >
            <div className="education-info">
              <div>
                <div className="school-year-container">
                  <p className="study-school">{study.school}</p>
                  <p>
                    {study.startYear} - {study.endYear} | {study.location}
                  </p>
                </div>
                <div className="degree-container">
                  <p>{study.degree}</p>
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
