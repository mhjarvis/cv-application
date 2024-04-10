/* eslint-disable react/prop-types */
import "./EducationOutput.css";
import Seperator from "../Output/Seperator";

export default function EducationOutput({ education }) {
    return (
        <div className="education-output-component">
            <h1>Education</h1>
            <Seperator />
            <div className="education-output-section">
                <span className="education-output-left">
                    {education.degree}, {education.school}
                </span>
                <span className="education-output-right">
                    {education.schoolStartDate} - {education.schoolEndDate} |{" "}
                    {education.schoolCity}, {education.schoolState}
                </span>
            </div>
        </div>
    );
}
