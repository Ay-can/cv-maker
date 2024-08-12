import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Resume from "./components/Resume";
import "./styles/app.css";

function App() {
  const handleFirstName = (e) => {
    setPerson({ ...person, firstname: e.target.value });
  };

  const handleLastName = (e) => {
    setPerson({ ...person, lastname: e.target.value });
  };

  const handleEmail = (e) => {
    setPerson({ ...person, email: e.target.value });
  };

  const [person, setPerson] = useState({
    firstname: "john",
    lastname: "doe",
    email: "demo@gmail.com",
    phone: "0512312311",
    address: "Amsterdam, Noord-Holland",
  });

  return (
    <>
      <PersonalInfo
        person={person}
        handleFirstName={handleFirstName}
        handleLastName={handleLastName}
        handleEmail={handleEmail}
      />
      <Resume person={person} />
    </>
  );
}

export default App;
