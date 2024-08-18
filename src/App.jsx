import { useState } from "react";
import PersonalInfoForm from "./components/PersonalInfoForm";
import Resume from "./components/Resume";
import EducationForm from "./components/EducationForm";
import WorkForm from "./components/WorkForm";
import SkillsForm from "./components/SkillsForm";
import WorkSection from "./components/WorkSection";
import SkillsSection from "./components/SkillsSection";

import "./styles/app.css";
import EducationSection from "./components/EducationSection";
import ProjectForm from "./components/ProjectForm";
import ProjectSection from "./components/ProjectSection";
import PersonalInfoSection from "./components/PersonalInfoSection";

function App() {
  const [workExperiences, setWorkExperiences] = useState([
    {
      id: 1,
      company: "Google",
      position: "Software Engineer",
      startDate: "12-03-2024",
      endDate: "present",
      location: "Zurich",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, alias repellat eos modi commodi nihil illum accusantium incidunt esse porro!",
    },
    {
      id: 2,
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
      id: 1,
      school: "Harvard University",
      degree: "Computer Science",
      startYear: 2020,
      endYear: 2024,
      location: "Massachusetts",
    },
    {
      id: 2,
      school: "MIT",
      degree: "Computer Science",
      startYear: 2020,
      endYear: 2024,
      location: "Massachusetts",
    },
  ]);

  const updateStudy = (studyId, field, value) => {
    setStudies((prevStudies) =>
      prevStudies.map((study) =>
        study.id === studyId ? { ...study, [field]: value } : study
      )
    );
  };

  const updateWorkExperiences = (workId, field, value) => {
    setWorkExperiences((prev) =>
      prev.map((experience) =>
        experience.id === workId
          ? { ...experience, [field]: value }
          : experience
      )
    );
  };

  const updateProjects = (projectId, field, value) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId ? { ...project, [field]: value } : project
      )
    );
  };

  const [projects, setProjects] = useState([
    {
      id: crypto.randomUUID(),
      name: "Cv-maker",
      link: "github.com/ay-can/cv-maker",
      stack: "reactjs",
      description: "A fun little project to learn more about react",
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

  const handleProjectForm = (e) => {
    setProjectForm({ ...projectForm, [e.target.name]: e.target.value });
  };

  const saveWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      { ...work, id: crypto.randomUUID() },
    ]);
  };

  const saveProjects = () => {
    setProjects([...projects, { ...projectForm, id: crypto.randomUUID() }]);
  };

  const addStudy = () => {
    setStudies([...studies, { ...education, id: crypto.randomUUID() }]);
  };

  const updatePersonalInfo = (field, value) => {
    setPerson({ ...person, [field]: value });
  };

  const updateSkills = (field, value) => {
    setSkillsForm({ ...skillsForm, [field]: value });
  };

  const [projectForm, setProjectForm] = useState({
    name: "Cv-maker",
    link: "github.com/ay-can/cv-maker",
    stack: "reactjs",
    description:
      "A fun little project first react project to learn about components, state, props and much more",
  });

  const [person, setPerson] = useState({
    fullname: "John",
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
    "start-date": "12-03-2024",
    "end-date": "present",
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
        addStudy={addStudy}
      />
      <WorkForm
        work={work}
        handleWorkForm={handleWorkForm}
        handleClick={saveWorkExperience}
      />
      <SkillsForm skillsForm={skillsForm} handleSkillsForm={handleSkillsForm} />
      <ProjectForm
        projectForm={projectForm}
        handleProjectForm={handleProjectForm}
        saveProjects={saveProjects}
      />

      <Resume>
        <PersonalInfoSection
          person={person}
          updatePersonalInfo={updatePersonalInfo}
        />
        <EducationSection studies={studies} updateStudy={updateStudy} />
        <WorkSection
          workExperiences={workExperiences}
          updateWorkExperiences={updateWorkExperiences}
        />
        <SkillsSection skills={skillsForm} updateSkills={updateSkills} />
        <ProjectSection projects={projects} updateProjects={updateProjects} />
      </Resume>
    </>
  );
}

export default App;
