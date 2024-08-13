import "../styles/resume.css";

function Resume({ person, education }) {
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

      <div className="education-section">
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
    </div>
  );
}

export default Resume;
