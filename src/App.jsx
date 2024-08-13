import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Resume from "./components/Resume";
import Education from "./components/Education";
import "./styles/app.css";

function App() {
  const handlePersonForm = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleEducationForm = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const [person, setPerson] = useState({
    firstname: "john",
    lastname: "doe",
    career: "Software Engineer",
    email: "demo@gmail.com",
    phone: "0512312311",
    address: "Amsterdam, Noord-Holland",
  });

  const [education, setEducation] = useState({
    school: "Harvard University",
    degree: "Computer Science",
    startYear: 2020,
    endYear: 2024,
    location: "Massachusetts",
  });

  return (
    <>
      <PersonalInfo person={person} handleForm={handlePersonForm} />
      <Resume person={person} education={education} />
      <Education
        education={education}
        handleEducationForm={handleEducationForm}
      />
    </>
  );
}

export default App;
