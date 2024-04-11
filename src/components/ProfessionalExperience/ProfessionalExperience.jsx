/* eslint-disable react/prop-types */
import { useState } from "react";
import icon_expand from "../../images/icon_expand.svg";
import "./ProfessionalExperience.css";
import LabelWithInput from "../LabelWithInput";
import ComponentButtons from "../ComponentButtons";
import TextArea from "../TextArea";

export default function ProfessionalExpierence({
    professional,
    onProfessionalUpdate,
    formClasses,
    clearProfessional,
}) {
    const [showProfessional, setShowProfessional] = useState(false);

    function setShowProfessionalHandler() {
        setShowProfessional((lastVal) => !lastVal);
    }

    const expandIcon = (
        <img src={icon_expand} alt="expand icon" className="expand-icon" />
    );


    function some(e) {
        e.preventDefault()
    }

    const professionalInformation = (
        <div>
            <div action="" onSubmit={some} className={formClasses}>
                <h1 className="professional-title">
                    Professional Experience
                    <button
                        className="expand-button"
                        onClick={setShowProfessionalHandler}
                    >
                        {expandIcon}
                    </button>
                </h1>
                <LabelWithInput
                    id="employer"
                    labelTitle="Employer"
                    inputType="text"
                    value={professional.employer}
                    onChangeHandler={onProfessionalUpdate}
                />
                <LabelWithInput
                    id="jobTitle"
                    labelTitle="Job Title"
                    inputType="text"
                    value={professional.jobTitle}
                    onChangeHandler={onProfessionalUpdate}
                />{" "}
                <LabelWithInput
                    id="employmentStartDate"
                    labelTitle="Start Date"
                    inputType="text"
                    value={professional.employmentStartDate}
                    onChangeHandler={onProfessionalUpdate}
                />{" "}
                <LabelWithInput
                    id="employmentEndDate"
                    labelTitle="End Date"
                    inputType="text"
                    value={professional.employmentEndDate}
                    onChangeHandler={onProfessionalUpdate}
                />{" "}
                <LabelWithInput
                    id="location"
                    labelTitle="Location"
                    inputType="text"
                    value={professional.location}
                    onChangeHandler={onProfessionalUpdate}
                />{" "}
                <TextArea
                    id="description"
                    labelTitle="Description"
                    inputType="textarea"
                    value={professional.description}
                    onChangeHandler={onProfessionalUpdate}
                />
                <ComponentButtons clearComponent={clearProfessional} />
            </div>
        </div>
    );

    const professionalInformationHidden = (
        <div action="" className={formClasses}>
            <h1 className="professional-title professional-title-hidden">
                Professional Experience
                <button
                    className="expand-button"
                    onClick={setShowProfessionalHandler}
                >
                    {expandIcon}
                </button>
            </h1>
        </div>
    );

    return showProfessional ? professionalInformation : professionalInformationHidden
}
