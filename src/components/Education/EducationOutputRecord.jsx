/* eslint-disable react/prop-types */

export default function EducationOutputRecord({ record, addClass = "" }) {
    let classes = "education-output-section";

    if (addClass && record.degree !== '') {
        classes += " stored-education-output-active";
    }

    return (
        
        <div className={classes}>
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
