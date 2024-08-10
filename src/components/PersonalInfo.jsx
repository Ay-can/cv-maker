function PersonalInfo({ firstname, handleFirstName }) {
  return (
    <>
      <form>
        <label htmlFor="firstname">Firstname: </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={firstname}
          onChange={handleFirstName}
        />
      </form>
    </>
  );
}

export default PersonalInfo;
