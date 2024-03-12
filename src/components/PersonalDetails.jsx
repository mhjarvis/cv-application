import "../styles/PersonalDetails.css";
import InputElement from "./InputElement";

export default function PersonalDetails() {
    return (
        <div className="personal-details-container">
            <h2 className="personal-details-header">Personal Details</h2>
            <InputElement
                labelClass="full-name-label"
                inputLabel="Full Name"
                inputClass="full-name"
                inputPlaceHolder="Enter your full name"
            />
            <div className="contact-container">
                <InputElement
                    labelClass="email-label"
                    inputLabel="Email"
                    inputClass="email"
                    inputPlaceHolder="Enter your email"
                />
                <InputElement
                    labelClass="phone-number-label"
                    inputLabel="Phone Number"
                    inputClass="phone-number"
                    inputPlaceHolder="Enter your phone number"
                />
            </div>
            <InputElement
                labelClass="linkedin-label"
                inputLabel="LinkedIn"
                inputClass="linkedin"
                inputPlaceHolder="Enter LinkedIn"
            />
            <InputElement
                labelClass="github-label"
                inputLabel="Github"
                inputClass="github"
                inputPlaceHolder="Enter Github"
            />
        </div>
    );
}
