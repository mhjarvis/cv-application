/* eslint-disable react/prop-types */
import "./ProfessionalExperienceOutput.css";
import Seperator from "../Output/Seperator";
export default function ProfessionalExpierenceOutput({ professional }) {
    return (
        <div className="professional-output-component">
            <h1>Professional Experience</h1>
            <Seperator />
            <div className="professional-output-section">
                <div className="professional-output-top">
                    {" "}
                    <span className="professional-output-top-left">
                        {" "}
                        {professional.employer}, {professional.jobTitle}
                    </span>
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
