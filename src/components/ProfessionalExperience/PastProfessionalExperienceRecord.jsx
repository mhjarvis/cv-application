/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './PastProfessionalExperienceRecord.css'

export default function PastProfessionalExperienceRecord({
    record,
    addClass = "",
}) {
    let classes = "pper-output-section";

    if (addClass && record.degree !== "") {
        classes += "";
    }

    return (
        <div className={classes}>
            <div className="pper-output-line-1">
                <span className="pper-left">
                    {/* remove comma if additional information is not present */}
                    {record.employer}{" "}
                    {record.jobTitle ? `, ${record.jobTitle}` : ""}
                </span>
                <span className="pper-right">
                    {record.employmentStartDate} - {record.employmentEndDate}
                </span>
            </div>
            <span className="pper-output-line-2">{record.description}</span>
        </div>
    );
}
