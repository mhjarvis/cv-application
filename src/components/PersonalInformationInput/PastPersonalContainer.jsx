/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import "./PastPersonalContainer.css";
import icon_edit from "../../images/icon-edit.svg";

export default function PastPersonalContainer({
    pastPersonal,
    deletePastPersonal,
    editPastPersonal,
}) {
    if (pastPersonal.fullName) {
        return (
            <div className="ppc-container">
                <div className="ppc-container-element">
                    <div className="ppc-line-1">
                        <div className="ppc-line-1-container">
                            <div className="ppc-line-1-info">
                                <p className="ppc-line-1-degree">
                                    {pastPersonal.fullName}
                                </p>
                            </div>
                            <div className="personal-buttons-container">
                                <button
                                    className="ppc-edit-button"
                                    onClick={() => editPastPersonal}
                                >
                                    <img src={icon_edit} alt="edit icon" />
                                </button>
                                <button
                                    className="ppc-delete-button"
                                    onClick={() => deletePastPersonal}
                                >
                                    x
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="ppc-line-2">{pastPersonal.email}</div>
                </div>
            </div>
        );
    } else {
        return "";
    }
}
