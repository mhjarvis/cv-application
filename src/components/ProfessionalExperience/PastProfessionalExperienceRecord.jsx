/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function PastProfessionalExperienceRecord({
    record,
    addClass = "",
}) {
    let classes = "education-output-section";

    if (addClass && record.degree !== "") {
        classes += " stored-education-output-active";
    }

    return (
        <div className={classes}>
            <div className="education-output-left">
                <span>
                    {/* remove comma if additional information is not present */}
                    {record.employer}{" "}
                    {record.jobTitle ? `, ${record.jobTitle}` : ""}
                </span>
                <span>
                    {record.employmentStartDate}
                </span>
            </div>
            <span className="education-output-right">{record.description}</span>
        </div>
    );
}
