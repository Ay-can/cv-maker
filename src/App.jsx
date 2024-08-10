import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Resume from "./components/Resume";

function App() {
  const [firstname, setFirstname] = useState("");

  const handleFirstName = (e) => {
    setFirstname(e.target.value);
  };

  return (
    <>
      <PersonalInfo firstname={firstname} handleFirstName={handleFirstName} />
      <Resume firstname={firstname} handleFirstName={handleFirstName} />
    </>
  );
}

export default App;
