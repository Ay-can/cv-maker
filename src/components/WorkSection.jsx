function WorkSection({ workExperiences }) {
  return (
    <>
      <div className="work-experience-section">
        <h2 className="section-header">Work Experience</h2>
        {workExperiences.map((experience) => {
          return (
            <div key={experience.id} className="work-experience-block">
              <div className="work-date-location">
                <p>
                  {experience.startDate} - {experience.endDate}
                </p>
                <p>{experience.location} </p>
              </div>
              <div className="work-company-description">
                <p>{experience.company}</p>
                <p>{experience.position}</p>
                <p className="description">{experience.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WorkSection;
