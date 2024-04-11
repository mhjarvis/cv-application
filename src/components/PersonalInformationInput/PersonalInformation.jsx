/* eslint-disable react/prop-types */
import "./PersonalInformation.css";
import LabelWithInput from "../LabelWithInput";
import ComponentButtons from "../ComponentButtons";
import { useState } from "react";

export default function PersonalInformationInput({
    onPersonalUpdate,
    formClasses,
    personal,
    clearPersonal,
}) {
    const [showPersonal, setShowPersonal] = useState(true);

    function setShowPersonalHandler() {
        setShowPersonal(() => {
            !showPersonal;
        });
    }

    const personalInformation = (
        <div>
            <form action="" className={formClasses}>
                <h1 className="personal-info-title">
                    Personal Information{" "}
                    <button onClick={setShowPersonalHandler}>Arrow</button>
                </h1>
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
                <ComponentButtons clearComponent={clearPersonal} />
            </form>
        </div>
    );

    const hidePersonalInformation = (
        <form action="" className={formClasses}>
            <h1 className="personal-info-title personal-info-title-hidden">
                Personal Information{" "}
                <button onClick={setShowPersonalHandler}>Arrow</button>
            </h1>
        </form>
    );

    return showPersonal ? personalInformation : hidePersonalInformation;
}
