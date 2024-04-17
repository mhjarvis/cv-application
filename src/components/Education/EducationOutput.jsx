/* eslint-disable react/prop-types */
import "./EducationOutput.css";
import Seperator from "../Output/Seperator";
import EducationOutputRecord from "./EducationOutputRecord";

export default function EducationOutput({ education, pastEducationArr }) {
    return (
        <div className="education-output-component">
            <h1>Education</h1>
            <Seperator />
            <div className="stored-education-output">
                {pastEducationArr.map((record, index) => (
                    <EducationOutputRecord record={record} key={index} />
                ))}
            </div>
            <EducationOutputRecord addClass={'stored-education-output-active'} record={education} />
        </div>
    );
}
