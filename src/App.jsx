import { useState } from "react";
import PersonalInfoForm from "./components/PersonalInfoForm";
import Resume from "./components/Resume";
import EducationForm from "./components/EducationForm";
import WorkForm from "./components/WorkForm";
import SkillsForm from "./components/SkillsForm";
import WorkSection from "./components/WorkSection";
import "./styles/app.css";
import EducationSection from "./components/EducationSection";

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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, alias repellat eos modi commodi nihil illum accusantium incidunt esse porro!",
    },
    {
      id: crypto.randomUUID(),
      company: "Google",
      position: "Software Engineer",
      startDate: "12-03-2024",
      endDate: "present",
      location: "Zurich",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, omnis. At, illum. Dignissimos nam ea aperiam voluptate accusantium culpa eaque!",
    },
  ]);

  const [studies, setStudies] = useState([
    {
      id: crypto.randomUUID(),
      school: "Harvard University",
      degree: "Computer Science",
      startYear: 2020,
      endYear: 2024,
      location: "Massachusetts",
    },
    {
      id: crypto.randomUUID(),
      school: "Harvard University",
      degree: "Computer Science",
      startYear: 2020,
      endYear: 2024,
      location: "Massachusetts",
    },
  ]);

  const [skillsForm, setSkillsForm] = useState({
    "programming-languages": "Javascript, Go, Python, Html/Css",
    "libraries-frameworks": "Reactjs, Webpack, Asp.net Core, Django",
    "tools-platforms": "Git, Bash, Linux, Vim",
    databases: "Mysql, Mysqlserver, Postgresql",
  });

  const handlePersonForm = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleEducationForm = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const handleWorkForm = (e) => {
    setWork({ ...work, [e.target.name]: e.target.value });
  };

  const handleSkillsForm = (e) => {
    setSkillsForm({ ...skillsForm, [e.target.name]: e.target.value });
  };

  const saveWorkExperience = () => {
    setWorkExperiences([...workExperiences, { ...work }]);
  };

  const [person, setPerson] = useState({
    firstname: "John",
    lastname: "Doe",
    career: "Software Engineer",
    email: "demo@gmail.com",
    phone: "0512312311",
    address: "Amsterdam",
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
      <PersonalInfoForm person={person} handleForm={handlePersonForm} />
      <EducationForm
        education={education}
        handleEducationForm={handleEducationForm}
      />
      <WorkForm
        work={work}
        handleWorkForm={handleWorkForm}
        handleClick={saveWorkExperience}
      />
      <SkillsForm skillsForm={skillsForm} handleSkillsForm={handleSkillsForm} />

      <Resume person={person}>
        <EducationSection studies={studies} />
        <WorkSection workExperiences={workExperiences} />
      </Resume>
    </>
  );
}

export default App;
