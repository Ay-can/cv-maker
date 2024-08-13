import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Resume from "./components/Resume";
import Education from "./components/Education";
import Work from "./components/Work";
import "./styles/app.css";

function App() {
  const handlePersonForm = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleEducationForm = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const handleWorkForm = (e) => {
    setWork({ ...work, [e.target.name]: e.target.value });
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vel ea, explicabo, expedita illo doloribus necessitatibus quaerat sapiente aliquid aperiam, hic corrupti aliquam doloremque numquam minus eius? Aperiam voluptates consectetur, fuga ipsa autem ut dolores voluptate illo dignissimos reiciendis natus nostrum saepe aspernatur optio, rerum minima sit temporibus esse qui eveniet. Nesciunt, aspernatur perferendis. Nesciunt animi illum deleniti similique voluptates modi vitae doloribus autem rem pariatur. Deserunt sed possimus harum nulla ratione eius! Nostrum, non unde deserunt, temporibus architecto magni exercitationem culpa possimus accusamus aperiam commodi voluptatum repellendus molestiae perferendis quis dolores? Doloremque possimus in soluta nam, animi cumque numquam!",
  });

  return (
    <>
      <PersonalInfo person={person} handleForm={handlePersonForm} />
      <Resume person={person} education={education} />
      <Education
        education={education}
        handleEducationForm={handleEducationForm}
      />
      <Work work={work} handleWorkForm={handleWorkForm} />
    </>
  );
}

export default App;
