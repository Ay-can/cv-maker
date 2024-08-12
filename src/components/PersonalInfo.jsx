import "../styles/personalInfo.css";

function PersonalInfo({ person, handleFirstName, handleLastName }) {
  return (
    <div className="personal-info">
      <form>
        <label htmlFor="firstname">Firstname: </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={person.firstname}
          onChange={handleFirstName}
        />
        <label htmlFor="lastname">Lastname: </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={person.lastname}
          onChange={handleLastName}
        ></input>
      </form>
    </div>
  );
}

export default PersonalInfo;
