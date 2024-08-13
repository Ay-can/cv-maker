import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Resume from "./components/Resume";
import "./styles/app.css";

function App() {
  const handleForm = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
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
      <PersonalInfo person={person} handleForm={handleForm} />
      <Resume person={person} />
    </>
  );
}

export default App;
