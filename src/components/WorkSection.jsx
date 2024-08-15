function WorkSection({ workExperiences }) {
  return (
    <>
      <div className="work-experience-section">
        <h2 className="section-header">Work Experience</h2>
        {workExperiences.map((experience) => {
          return (
            <div key={experience.id} className="work-experience-block">
              <div className="work-info-container">
                <p className="company-position">
                  {experience.company} | {experience.position}
                </p>
                <p>
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
              <div className="work-description-container">
                <p className="work-description">{experience.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WorkSection;
