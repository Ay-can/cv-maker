import { useState } from "react";
import Resume from "./components/Resume";
import EducationForm from "./components/EducationForm";
import WorkForm from "./components/WorkForm";
import WorkSection from "./components/WorkSection";
import SkillsSection from "./components/SkillsSection";

import "./styles/app.css";
import EducationSection from "./components/EducationSection";
import ProjectForm from "./components/ProjectForm";
import ProjectSection from "./components/ProjectSection";
import PersonalInfoSection from "./components/PersonalInfoSection";

import { parse } from "date-fns";

function App() {
  const [workExperiences, setWorkExperiences] = useState([
    {
      id: 1,
      company: "Google",
      position: "Software Engineer",
      "start-date": "2024-03-12",
      "end-date": "present",
      location: "Zurich",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, alias repellat eos modi commodi nihil illum accusantium incidunt esse porro!",
    },
  ]);

  const [studies, setStudies] = useState([
    {
      id: 1,
      school: "Harvard University",
      degree: "Computer Science",
      "start-year": 2020,
      "end-year": 2024,
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

  const deleteStudy = (studyId) => {
    setStudies((prevStudies) =>
      prevStudies.filter((study) => study.id !== studyId)
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

  const deleteWorkExperience = (workId) => {
    setWorkExperiences((prevWorkExperiences) =>
      prevWorkExperiences.filter(
        (workExperience) => workExperience.id !== workId
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

  const deleteProject = (id) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== id)
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

  const handleEducationForm = (e) => {
    if (e.target.name === "start-year" || e.target.name === "end-year") {
      let parsedDate = parse(e.target.value, "yyyy-MM-dd", new Date());
      setEducation({
        ...education,
        [e.target.name]: parsedDate.getUTCFullYear(),
      });
    } else {
      setEducation({ ...education, [e.target.name]: e.target.value });
    }
  };

  const handleWorkForm = (e) => {
    setWork({ ...work, [e.target.name]: e.target.value });
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

  // This keeps the state of the form card toggles
  // at first only toggle the personalInfo card and change state when user toggles
  const [formToggles, setFormToggles] = useState({
    personalInfo: true,
    education: false,
    work: false,
    skills: false,
    projects: false,
  });

  const updateFormToggles = (field) => {
    formToggles[field]
      ? setFormToggles({ ...formToggles, [field]: false })
      : setFormToggles({ ...formToggles, [field]: true });
  };

  return (
    <>
      <header className="navbar-header">
        <div className="header-container">
          <h1>Cv-Maker</h1>
          <h3>Click on the resume to edit/remove items!</h3>
        </div>
      </header>
      <main>
        <div className="form-section">
          <EducationForm
            education={education}
            handleEducationForm={handleEducationForm}
            addStudy={addStudy}
            formToggles={formToggles}
            updateFormToggles={updateFormToggles}
          />
          <WorkForm
            work={work}
            handleWorkForm={handleWorkForm}
            handleClick={saveWorkExperience}
            formToggles={formToggles}
            updateFormToggles={updateFormToggles}
          />

          <ProjectForm
            projectForm={projectForm}
            handleProjectForm={handleProjectForm}
            saveProjects={saveProjects}
            formToggles={formToggles}
            updateFormToggles={updateFormToggles}
          />
        </div>

        <div className="resume-section">
          <Resume>
            <PersonalInfoSection
              person={person}
              updatePersonalInfo={updatePersonalInfo}
            />
            <EducationSection
              studies={studies}
              updateStudy={updateStudy}
              deleteStudy={deleteStudy}
            />
            <WorkSection
              workExperiences={workExperiences}
              updateWorkExperiences={updateWorkExperiences}
              deleteWorkExperience={deleteWorkExperience}
            />
            <SkillsSection skills={skillsForm} updateSkills={updateSkills} />
            <ProjectSection
              projects={projects}
              updateProjects={updateProjects}
              deleteProject={deleteProject}
            />
          </Resume>
        </div>
      </main>
      <footer>
        <p>
          Created By{" "}
          <a
            target="_blank noopener noreferrer"
            href="https://www.github.com/Ay-can"
          >
            Ay-can
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
