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

  const [person, setPerson] = useState({ firstname: "john", lastname: "doe" });

  return (
    <>
      <PersonalInfo
        person={person}
        handleFirstName={handleFirstName}
        handleLastName={handleLastName}
      />
      <Resume person={person} />
    </>
  );
}

export default App;
