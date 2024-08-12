import "../styles/personalInfo.css";

function PersonalInfo({
  person,
  handleFirstName,
  handleLastName,
  handleEmail,
  handlePhone,
  handleAddress,
}) {
  return (
    <div className="personal-info">
      <form>
        <label htmlFor="firstname">Firstname </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={person.firstname}
          onChange={handleFirstName}
        />
        <label htmlFor="lastname">Lastname </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={person.lastname}
          onChange={handleLastName}
        ></input>

        <label htmlFor="email">Email </label>
        <input
          type="email"
          name="email"
          id="email"
          value={person.email}
          onChange={handleEmail}
        ></input>

        <label htmlFor="phone-number">Phone Number </label>
        <input
          type="email"
          name="email"
          id="email"
          value={person.phone}
          onChange={handlePhone}
        ></input>

        <label htmlFor="address">Address </label>
        <input
          type="text"
          name="address"
          id="address"
          value={person.address}
          onChange={handleAddress}
        ></input>
      </form>
    </div>
  );
}

export default PersonalInfo;
