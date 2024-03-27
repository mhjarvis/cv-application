import Inputs from "../Inputs";
import "./PersonalDetails.css";

export default function PersonalDetails() {
    return (
        <div className="personal-details section-container">
            <h2 className="personal-heading section-heading">
                Personal Details
            </h2>

            <Inputs type="text" className="fullname" placeholder="Full Name" />

            <Inputs type="text" className="fullname" placeholder="Full Name" />

            <div className="contact-container">
                <Inputs
                    type="text"
                    className="fullname"
                    placeholder="Full Name"
                />
                <Inputs
                    type="text"
                    className="fullname"
                    placeholder="Full Name"
                />
            </div>

            <Inputs type="text" className="fullname" placeholder="Full Name" />

            <Inputs type="text" className="fullname" placeholder="Full Name" />

            <Inputs type="text" className="fullname" placeholder="Full Name" />
        </div>
    );
}
