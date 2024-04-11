/* eslint-disable react/prop-types */

import "./Output.css";
import EducationOutput from "../Education/EducationOutput";
import ProfessionalExpierenceOutput from "../ProfessionalExperience/ProfessionalExperienceOutput";
import PersonalInformationOutput from "../PersonalInformationInput/PersonalInformationOutput";

export default function Output({ personal, education, professional }) {
    return (
        <div className="output-container">
            <PersonalInformationOutput personal={personal} />
            <EducationOutput education={education} />
            <ProfessionalExpierenceOutput professional={professional} />
        </div>
    );
}
