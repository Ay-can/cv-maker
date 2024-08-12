import "../styles/resume.css";

function Resume({ person }) {
  return (
    <div className="resume-container">
      <header>
        <h1>
          {person.firstname} {person.lastname}
        </h1>
        <div className="contact-info">
          <p>{person.email}</p>
          <p>{person.phone}</p>
          <p>{person.address}</p>
        </div>
      </header>
    </div>
  );
}

export default Resume;
