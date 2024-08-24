import { useState } from "react";
import "../styles/work.css";

function WorkSection({
  workExperiences,
  updateWorkExperiences,
  deleteWorkExperience,
}) {
  const handleInput = (e, workId, field) => {
    const updatedValue = e.target.textContent;
    updateWorkExperiences(workId, field, updatedValue);
  };

  const [hiddenBtn, setHiddenBtn] = useState(false);

  return (
    <>
      <div
        className="work-experience-section"
        onMouseEnter={() => setHiddenBtn(true)}
        onMouseLeave={() => setHiddenBtn(false)}
      >
        <h2 className="section-header">Work Experience</h2>
        {workExperiences.map((experience) => {
          return (
            <div key={experience.id} className="work-experience-block">
              <div className="work-info-container">
                <div className="company-position-container">
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleInput(e, experience.id, "company")}
                  >
                    {experience.company}
                  </p>
                  <p className="seperator"> | </p>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleInput(e, experience.id, "position")}
                  >
                    {experience.position}
                  </p>
                </div>
                <div className="date-delete-btn-container">
                  <div className="date-container">
                    <p
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleInput(e, experience.id, "startDate")}
                    >
                      {experience["start-date"]}
                    </p>
                    <p className="seperator"> - </p>
                    <p
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleInput(e, experience.id, "endDate")}
                    >
                      {experience["end-date"]}
                    </p>
                    <p className="seperator"> | </p>
                    <p
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleInput(e, experience.id, "location")}
                    >
                      {experience.location}
                    </p>
                  </div>
                  <div className="delete-container">
                    {hiddenBtn && (
                      <button
                        className="delete-btn"
                        onClick={() => deleteWorkExperience(experience.id)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="work-description-container">
                <p
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleInput(e, experience.id, "description")}
                  className="work-description"
                >
                  {experience.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WorkSection;
