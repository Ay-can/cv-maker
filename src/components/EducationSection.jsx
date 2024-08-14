function EducationSection({ studies }) {
  return (
    <div className="education-section">
      <h3>Education</h3>
      {studies.map((study) => {
        return (
          <div key={study.id} className="education-block">
            <div className="education-date-location">
              <p>
                {study.startYear} - {study.endYear}
              </p>
              <p>{study.location}</p>
            </div>
            <div className="education-school-degree">
              <p className="school">{study.school}</p>
              <p>{study.degree}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EducationSection;
