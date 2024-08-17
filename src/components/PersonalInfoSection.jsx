import "../styles/resume.css";

function PersonalInfoSection({ person, updatePersonalInfo }) {
  return (
    <header>
      <p
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => updatePersonalInfo("fullname", e.target.textContent)}
        className="resume-title"
      >
        {person.fullname}
      </p>
      <p
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => updatePersonalInfo("career", e.target.textContent)}
        className="resume-career"
      >
        {person.career}
      </p>
      <div className="contact-info">
        <span>
          <a
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => updatePersonalInfo("email", e.target.textContent)}
          >
            {person.email}
          </a>
        </span>
        <span
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => updatePersonalInfo("phone", e.target.textContent)}
          className="phone"
        >
          {person.phone}
        </span>
        <span
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => updatePersonalInfo("address", e.target.textContent)}
        >
          {person.address}
        </span>
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
