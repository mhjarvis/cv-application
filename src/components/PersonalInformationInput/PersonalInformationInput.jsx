/* eslint-disable react/prop-types */
import "./PersonalInformationInput.css";
import LabelWithInput from "../LabelWithInput";

export default function PersonalInformationInput({
    onPersonalUpdate,
    formClasses,
    personal,
}) {
    return (
        <div>
            <form action="" className={formClasses}>
                <h1 className="personal-info-title">Personal Information</h1>
                <LabelWithInput
                    id="fullName"
                    labelTitle="FullName"
                    type="text"
                    value={personal.fullName}
                    onChange={onPersonalUpdate}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={personal.email}
                    onChange={onPersonalUpdate}
                />
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="text"
                    id="phoneNumber"
                    value={personal.phoneNumber}
                    onChange={onPersonalUpdate}
                />
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    value={personal.address}
                    onChange={onPersonalUpdate}
                />
                <label htmlFor="address">LinkedIn</label>
                <input
                    type="text"
                    id="linkedIn"
                    value={personal.linkedIn}
                    onChange={onPersonalUpdate}
                />{" "}
                <label htmlFor="address">GitHub</label>
                <input
                    type="text"
                    id="github"
                    value={personal.github}
                    onChange={onPersonalUpdate}
                />
            </form>
        </div>
    );
}
