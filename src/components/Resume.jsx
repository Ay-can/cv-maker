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
          <span>{person.email}</span>
          <span className="phone">{person.phone}</span>
          <span>{person.address}</span>
        </div>
      </header>
      {children}
    </div>
  );
}

export default Resume;
