/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import icon_expand from "../../images/icon_expand.svg";
import ComponentButtons from "../ComponentButtons";
import LabelWithInput from "../LabelWithInput";
import "./Education.css";
import SavedElement from "../SavedElements";

export default function Education({
    education,
    onAddToEducationArr,
    onEducationUpdate,
    educationArr,
    formClasses,
    clearEducation,
}) {
    /* Education component shows as collapsed on initial render */
    const [showEducation, setShowEducation] = useState(true);

    function setShowEducationHandler() {
        setShowEducation((lastVal) => !lastVal);
    }

    const expandIcon = (
        <img src={icon_expand} alt="expand icon" className="expand-icon" />
    );

    const users = {
        name: "Markus",
        age: 22,
    };

    const x = [1, "dog", { afdjiojo: 23332 }, 23233, "foodhead"];
    console.table(x)

    /*     const otherEducationComponents = educationArr.map((v, index) => (
        <div key={index}>{v.degree}</div>
    )); */

    const educationInformation = (
        <div>
            {" "}
            <div className={formClasses}>
                <h1 className="education-title">
                    Education{" "}
                    <button
                        className="expand-button"
                        onClick={setShowEducationHandler}
                    >
                        {expandIcon}
                    </button>
                </h1>
                {educationArr.length > 0 ? (
                    <SavedElement arr={educationArr} />
                ) : (
                    ""
                )}
                {/* {educationArr.length > 0 ? otherEducationComponents : ""} */}
                <LabelWithInput
                    id="degree"
                    labelTitle="Degree"
                    inputType="text"
                    value={education.degree}
                    onChangeHandler={onEducationUpdate}
                />
                <LabelWithInput
                    id="school"
                    labelTitle="School"
                    inputType="text"
                    value={education.school}
                    onChangeHandler={onEducationUpdate}
                />{" "}
                <LabelWithInput
                    id="schoolCity"
                    labelTitle="City"
                    inputType="text"
                    value={education.schoolCity}
                    onChangeHandler={onEducationUpdate}
                />{" "}
                <LabelWithInput
                    id="schoolState"
                    labelTitle="State"
                    inputType="text"
                    value={education.schoolState}
                    onChangeHandler={onEducationUpdate}
                />
                <LabelWithInput
                    id="schoolStartDate"
                    labelTitle="Start Date"
                    inputType="text"
                    value={education.schoolStartDate}
                    onChangeHandler={onEducationUpdate}
                />{" "}
                <LabelWithInput
                    id="schoolEndDate"
                    labelTitle="End Date"
                    inputType="text"
                    value={education.schoolEndDate}
                    onChangeHandler={onEducationUpdate}
                />{" "}
                <ComponentButtons
                    clearComponent={clearEducation}
                    onAddToEducationArr={onAddToEducationArr}
                />
            </div>
        </div>
    );
    const educationInformationHidden = (
        <div className={formClasses}>
            <h1 className="education-title education-title-hidden">
                Education{" "}
                <button
                    className="expand-button"
                    onClick={setShowEducationHandler}
                >
                    {expandIcon}
                </button>
            </h1>
        </div>
    );

    return showEducation ? educationInformation : educationInformationHidden;
}
