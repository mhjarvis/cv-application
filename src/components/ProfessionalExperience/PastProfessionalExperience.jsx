/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import icon_edit from "../../images/icon-edit.svg";

import "./PastProfessionalExperience.css";
export default function PastProfessionalExperience({
    pastProfessional,
    deleteProfessionalExperience,
    editProfessionalExperience,
}) {
    if (pastProfessional.length > 0) {
        return (
            <div className="ppe-container">
                {pastProfessional.map((record, index) => (
                    <div className="ppe-container-element" key={index}>
                        <div className="ppe-line-1">
                            <div className="ppe-line-1-container">
                                <div className="ppe-line-1-info">
                                    <p className="ppe-line-1-degree">
                                        {record.employer} ,{" "}
                                        <span className="ppe-italic">
                                            {record.jobTitle}
                                        </span>
                                    </p>
                                </div>
                                <div className="personal-buttons-container">
                                    <button
                                        className="ppc-edit-button"
                                        onClick={editProfessionalExperience}
                                    >
                                        <img src={icon_edit} alt="edit icon" />
                                    </button>
                                    <button
                                        className="ppc-delete-button"
                                        onClick={deleteProfessionalExperience}
                                    >
                                        x
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="ppc-line-2">{record.employmentStartDate} - {record.employmentEndDate}</div>
                    </div>
                ))}
            </div>
        );
    } else {
        return "";
    }
}
