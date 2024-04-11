/* eslint-disable react/prop-types */
import "./PersonalInformationInput.css";
import LabelWithInput from "../LabelWithInput";
import ComponentButtons from "../ComponentButtons";

export default function PersonalInformationInput({
    onPersonalUpdate,
    formClasses,
    personal,
    clearPersonal,
}) {
    return (
        <div>
            <form action="" className={formClasses}>
                <h1 className="personal-info-title">Personal Information</h1>
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
}
