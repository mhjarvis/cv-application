import Certificates from "./Certificates";
import Education from "./Education";
import PersonalDetails from "./PersonalDetails";
import ProfessionalExperience from "./ProfessionalExperience";
import Skills from "./Skills";

export default function ResumeInput() {
    return (
        <div className="input-container" >
            <PersonalDetails />
            <Education />
            <Skills />
            <ProfessionalExperience />
            <Certificates />
        </div>
    );
}
