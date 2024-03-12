import "../styles/PersonalDetails.css";
import InputElement from "./InputElement";

export default function PersonalDetails() {
    return (
        <div className="personal-details-container">
            <h2 className="personal-details-header">Personal Details</h2>
            <InputElement
                inputLabel="Full Name"
                inputClass="full-name"
                inputPlaceHolder="Enter your full name"
            />
            <InputElement
                inputLabel="Email"
                inputClass="email"
                inputPlaceHolder="Enter your email"
            />
            <InputElement
                inputLabel="Phone Number"
                inputClass="phone-number"
                inputPlaceHolder="Enter your phone number"
            />
            <InputElement
                inputLabel="LinkedIn"
                inputClass="linkedin"
                inputPlaceHolder="Enter LinkedIn"
            />
            <InputElement
                inputLabel="Github"
                inputClass="github"
                inputPlaceHolder="Enter Github"
            />
        </div>
    );
}
