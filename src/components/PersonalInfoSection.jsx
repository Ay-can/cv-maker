import "../styles/resume.css";

function PersonalInfoSection({ person }) {
  return (
    <header>
      <p className="resume-title">
        {person.firstname} {person.lastname}
      </p>
      <p className="resume-career">{person.career}</p>
      <div className="contact-info">
        <span>
          <a>{person.email}</a>
        </span>
        <span className="phone">{person.phone}</span>
        <span>{person.address}</span>
      </div>
      <div className="contact-links">
        <span>
          <a href="#">Github</a> |{" "}
        </span>
        <span>
          <a href="#">Linkedin </a>
        </span>
        <span>
          {" "}
          | <a href="#"> Website </a>
        </span>
      </div>
    </header>
  );
}

export default PersonalInfoSection;
