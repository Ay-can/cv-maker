import { useState } from "react";
import PersonalInfoForm from "./components/PersonalInfoForm";
import Resume from "./components/Resume";
import EducationForm from "./components/EducationForm";
import WorkForm from "./components/WorkForm";
import WorkSection from "./components/WorkSection";
import "./styles/app.css";

function App() {
  const [workExperiences, setWorkExperiences] = useState([
    {
      id: crypto.randomUUID(),
      company: "Google",
      position: "Software Engineer",
      startDate: "12-03-2024",
      endDate: "present",
      location: "Zurich",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore fugit magnam laudantium omnis similique iure harum velit at quas aperiam.",
    },
    {
      id: crypto.randomUUID(),
      company: "Google",
      position: "Software Engineer",
      startDate: "12-03-2024",
      endDate: "present",
      location: "Zurich",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore fugit magnam laudantium omnis similique iure harum velit at quas aperiam.",
    },
  ]);

  const handlePersonForm = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleEducationForm = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const handleWorkForm = (e) => {
    setWork({ ...work, [e.target.name]: e.target.value });
  };

  const saveWorkExperience = () => {
    setWorkExperiences([...workExperiences, { ...work }]);
    console.log(workExperiences);
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

  const [work, setWork] = useState({
    company: "Google",
    position: "Software Engineer",
    startDate: "12-03-2024",
    endDate: "present",
    location: "Zurich",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore fugit magnam laudantium omnis similique iure harum velit at quas aperiam.",
  });

  return (
    <>
      {/* <PersonalInfoForm person={person} handleForm={handlePersonForm} /> */}
      {/* <Resume person={person} education={education} work={work} /> */}
      <Resume person={person}>
        <WorkSection workExperiences={workExperiences} />
      </Resume>
      {/* <EducationForm
        education={education}
        handleEducationForm={handleEducationForm}
      /> */}
      {/* <WorkForm
        work={work}
        workExperiences={workExperiences}
        handleWorkForm={handleWorkForm}
        handleClick={saveWorkExperience}
      /> */}
    </>
  );
}

export default App;
