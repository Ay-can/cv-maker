import "../styles/personalInfo.css";

function PersonalInfoForm({ person, handleForm }) {
  return (
    <div className="personal-info-container">
      <div className="card">
        <h2>Personal Info</h2>
        <form>
          <label htmlFor="firstname">Firstname </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={person.firstname}
            onChange={handleForm}
          />
          <label htmlFor="lastname">Lastname </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={person.lastname}
            onChange={handleForm}
          ></input>

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
