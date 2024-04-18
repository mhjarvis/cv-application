/* eslint-disable react/prop-types */
import "./PersonalInformation.css";
import LabelWithInput from "../LabelWithInput";
import ComponentButtons from "../ComponentButtons";
import PastPersonalContainer from "./PastPersonalContainer";
import icon_expand from "../../images/icon_expand.svg";
import { useState } from "react";

export default function PersonalInformationInput({
    onPersonalUpdate,
    formClasses,
    personal,
    clearPersonal,
    pastPersonal,
    addToPastPersonal,
    deletePastPersonal,
    editPastPersonal,
}) {
    const [showPersonal, setShowPersonal] = useState(true);

    function setShowPersonalHandler() {
        setShowPersonal((prevVal) => !prevVal);
    }

    const expandIcon = (
        <img src={icon_expand} alt="expand icon" className="expand-icon" />
    );

    const personalInformation = (
        <div>
            <div action="" className={formClasses}>
                <div className="personal-info-title">
                    <h1>Personal Information</h1>
                    <button
                        className="expand-button"
                        onClick={setShowPersonalHandler}
                    >
                        {expandIcon}
                    </button>
                </div>
                {pastPersonal.length > 0 ? (
                    <PastPersonalContainer
                        pastPersonal={pastPersonal}
                        deletePastPersonal={deletePastPersonal}
                        editPastPersonal={editPastPersonal}
                    />
                ) : (
                    ""
                )}
                <LabelWithInput
                    id="fullName"
                    labelTitle="FullName"
                    inputType="text"
                    value={personal.fullName}
                    onChangeHandler={onPersonalUpdate}
                />
                <LabelWithInput
                    id="email"
                    labelTitle="Email"
                    inputType="text"
                    value={personal.email}
                    onChangeHandler={onPersonalUpdate}
                />
                <LabelWithInput
                    id="phoneNumber"
                    labelTitle="Phone Number"
                    inputType="text"
                    value={personal.phoneNumber}
                    onChangeHandler={onPersonalUpdate}
                />{" "}
                <LabelWithInput
                    id="address"
                    labelTitle="Address"
                    inputType="text"
                    value={personal.address}
                    onChangeHandler={onPersonalUpdate}
                />
                <LabelWithInput
                    id="linkedIn"
                    labelTitle="linkedIn"
                    inputType="text"
                    value={personal.linkedIn}
                    onChangeHandler={onPersonalUpdate}
                />{" "}
                <LabelWithInput
                    id="github"
                    labelTitle="GitHub"
                    inputType="text"
                    value={personal.github}
                    onChangeHandler={onPersonalUpdate}
                />
                <ComponentButtons
                    clearComponent={clearPersonal}
                    onClickSave={addToPastPersonal}
                />
            </div>
        </div>
    );

    const hidePersonalInformation = (
        <div action="" className={formClasses}>
            <h1 className="personal-info-title personal-info-title-hidden">
                Personal Information{" "}
                <button
                    className="expand-button"
                    onClick={setShowPersonalHandler}
                >
                    {expandIcon}
                </button>
            </h1>
        </div>
    );

    return showPersonal ? personalInformation : hidePersonalInformation;
}
