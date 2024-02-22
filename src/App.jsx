import { useState } from "react";
import "./App.css";
import PersonalInformation from "./components/PersonalInformation";
import Resume from "./components/Resume";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  return (
    <div className="app-container">
      <div className="input-section">
        <PersonalInformation />
      </div>
      <div className="resume-section">
        <Resume pinfo={personalInfo} />
      </div>
    </div>
  );
}

export default App;
