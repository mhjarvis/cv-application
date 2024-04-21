/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./PastProfessionalExperienceRecord.css";

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
                <div className="pper-left">
                    {/* remove comma if additional information is not present */}
                    <span className="pper-left-1"> {record.employer} </span>
                    <span className="pper-left-2">
                        {" "}
                        {record.jobTitle ? `, ${record.jobTitle}` : ""}
                    </span>
                </div>
                <div className="pper-right">
                    {record.employmentStartDate} - {record.employmentEndDate}
                </div>
            </div>
            <span className="pper-output-line-2">{record.description}</span>
        </div>
    );
}
