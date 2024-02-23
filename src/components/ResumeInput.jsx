/* eslint-disable react/prop-types */
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Skills from "./Skills";
import ProfessionalExperience from "./ProfessionalExperience";

export default function ResumeInput() {
  return (
    <div className="resume-input-container">
      <PersonalDetails />
      <Education />
      <Skills />
      <ProfessionalExperience />
    </div>
  );
}
