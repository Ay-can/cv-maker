import "../styles/resume.css";

function Resume({ person }) {
  return (
    <div className="resume-container">
      <header>
        <h1>
          {person.firstname} {person.lastname}
        </h1>
      </header>
    </div>
  );
}

export default Resume;
