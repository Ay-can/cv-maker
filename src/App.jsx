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

  const handlePhone = (e) => {
    setPerson({ ...person, phone: e.target.value });
  };

  const handleAddress = (e) => {
    setPerson({ ...person, address: e.target.value });
  };

  const handleCareer = (e) => {
    setPerson({ ...person, career: e.target.value });
  };

  const [person, setPerson] = useState({
    firstname: "john",
    lastname: "doe",
    career: "Software Engineer",
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
        handlePhone={handlePhone}
        handleAddress={handleAddress}
        handleCareer={handleCareer}
      />
      <Resume person={person} />
    </>
  );
}

export default App;
