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
    </div>
  );
}

export default Resume;
