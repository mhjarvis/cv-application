/* eslint-disable react/prop-types */

export default function EducationOutputRecord({ record }) {
    return (
        <div className="education-output-section">
            <span className="education-output-left">
                {/* remove comma if additional information is not present */}
                {record.degree}
                {record.degree && record.school ? ", " : ""}
                {record.school}
            </span>
            <span className="education-output-right">
                {record.schoolStartDate}
                {record.schoolStartDate && record.schoolEndDate ? "-" : ""}
                {record.schoolEndDate}
                {record.schoolCity ? " | " : ""}
                {record.schoolCity}
                {record.schoolCity && record.schoolState ? ", " : ""}
                {record.schoolState}
            </span>
        </div>
    );
}
