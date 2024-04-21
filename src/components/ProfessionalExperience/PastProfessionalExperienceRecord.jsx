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
            <span className="education-output-left">
                {/* remove comma if additional information is not present */}
                {record.employer}
            </span>
            <span className="education-output-right">{record.description}</span>
        </div>
    );
}
