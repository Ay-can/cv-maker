import "../styles/personalInfo.css";

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
          <div className="card toggled">
            <div className="header-toggle">
              <h2>Personal Info</h2>
              <button onClick={handleFormToggles} type="button">
                Toggle
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="personal-info-container">
      <div className="card">
        <div className="header-toggle">
          <h2>Personal Info</h2>
          <button onClick={handleFormToggles} type="button">
            Toggle
          </button>
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
