import "../styles/personalInfo.css";
import Icon from "@mdi/react";
import { mdiArrowDownBoldOutline } from "@mdi/js";

function PersonalInfoForm({
  person,
  handleForm,
  formToggles,
  updateFormToggles,
}) {
  const handleFormToggles = () => {
    updateFormToggles("personalInfo");
  };

  if (!formToggles.personalInfo) {
    return (
      <>
        <div className="personal-info-container toggled">
          <div className="card toggled" onClick={handleFormToggles}>
            <div className="header-toggle">
              <h2>Personal Info</h2>
              <Icon
                path={mdiArrowDownBoldOutline}
                size={1.5}
                style={{ color: "white", position: "relative", top: "4px" }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="personal-info-container">
      <div className="card" onClick={handleFormToggles}>
        <div className="header-toggle">
          <h2>Personal Info</h2>
          <Icon
            path={mdiArrowDownBoldOutline}
            size={1.5}
            style={{ color: "white", position: "relative", top: "4px" }}
          />
        </div>
        <form>
          <label htmlFor="fullname">Fullname </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={person.fullname}
            onChange={handleForm}
          />

          <label htmlFor="career">Career </label>
          <input
            type="text"
            name="career"
            id="career"
            value={person.career}
            onChange={handleForm}
          ></input>

          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            id="email"
            value={person.email}
            onChange={handleForm}
          ></input>

          <label htmlFor="phone-number">Phone Number </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={person.phone}
            onChange={handleForm}
          ></input>

          <label htmlFor="address">Address </label>
          <input
            type="text"
            name="address"
            id="address"
            value={person.address}
            onChange={handleForm}
          ></input>
        </form>
      </div>
    </div>
  );
}

export default PersonalInfoForm;
