/* eslint-disable react/prop-types */
import "./ProfessionalExperienceOutput.css";
import Seperator from "../Output/Seperator";
export default function ProfessionalExpierenceOutput({ professional, pastProfessional }) {

    return (
        <div className="professional-output-component">
            <h1 className="bold">Professional Experience</h1>
            <Seperator />
            <div className="professional-output-section">
                <div className="professional-output-top">
                    {" "}
                    <p className="professional-output-top-left">
                        <span className="bold">{professional.employer}</span>,{" "}
                        <span className="italic">{professional.jobTitle}</span>
                    </p>
                    <span className="professional-output-top-right">
                        {professional.employmentStartDate} -{" "}
                        {professional.employmentEndDate}
                    </span>
                </div>
                <span className="professional-output-bottom">
                    {professional.description}
                </span>
            </div>
        </div>
    );
}
