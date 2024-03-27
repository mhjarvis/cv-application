import Certificates from "./Cert/Certificates";
import Education from "./Education/Education";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import ProfessionalExperience from "./Experience/Experience";
import Skills from "./Skills";

export default function ResumeInput() {
    return (
        <div className="input-container">
            <PersonalDetails />
            <Education />
            <Skills />
            <ProfessionalExperience />
            <Certificates />
        </div>
    );
}
