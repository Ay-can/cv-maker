import "../styles/resume.css";

function Resume({ person, education, work, workExperiences, children }) {
  return (
    <div className="resume-container">
      <header>
        <h1>
          {person.firstname} {person.lastname}
        </h1>
        <h2>{person.career}</h2>
        <div className="contact-info">
          <p>{person.email}</p>
          <p>{person.phone}</p>
          <p>{person.address}</p>
        </div>
      </header>
      {children}

      {/* <div className="education-section">
        <h3>Education</h3>
        <div className="education-block">
          <div className="education-date-location">
            <p>
              {education.startYear} - {education.endYear}
            </p>
            <p>{education.location}</p>
          </div>
          <div className="education-school-degree">
            <p className="school">{education.school}</p>
            <p>{education.degree}</p>
          </div>
        </div>
      </div>

      <div className="work-experience-section">
        <h3>Work Experience</h3>
        <div className="work-experience-block">
          <div className="work-date-location">
            <p>
              {work.startDate} - {work.endDate}
            </p>
            <p>{work.location} </p>
          </div>
          <div className="work-company-description">
            <p>{work.company}</p>
            <p>{work.position}</p>
            <p className="description">{work.description}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Resume;
