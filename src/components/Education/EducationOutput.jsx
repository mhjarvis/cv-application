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
                    {/* remove comma if additional information is not present */}
                    {education.degree}
                    {education.degree && education.school ? ", " : ""}
                    {education.school}
                </span>
                <span className="education-output-right">
                    {education.schoolStartDate}
                    {education.schoolStartDate && education.schoolEndDate
                        ? "-"
                        : ""}
                    {education.schoolEndDate}
                    {education.schoolCity ? " | " : ""}
                    {education.schoolCity}
                    {education.schoolCity && education.schoolState ? ", " : ""}
                    {education.schoolState}
                </span>
            </div>
        </div>
    );
}
