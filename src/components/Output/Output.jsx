/* eslint-disable react/prop-types */

import "./Output.css";
import EducationOutput from "../Education/EducationOutput";
import ProfessionalExpierenceOutput from "../ProfessionalExperience/ProfessionalExperienceOutput";
import PersonalInformationOutput from "../PersonalInformationInput/PersonalInformationOutput";

export default function Output({
    personal,
    pastPersonal,
    education,
    professional,
    pastEducationArr,
}) {
    return (
        <div className="output-container">
            <PersonalInformationOutput
                personal={personal}
                pastPersonal={pastPersonal}
            />
            <EducationOutput
                education={education}
                pastEducationArr={pastEducationArr}
            />
            <ProfessionalExpierenceOutput professional={professional} />
        </div>
    );
}
