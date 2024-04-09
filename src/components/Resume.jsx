import "./Resume.css";
import ButtonPanel from "./ButtonPanel/ButtonPanel";
import Output from "./Output/Output";
import { useState } from "react";
import PersonalInformationInput from "./PersonalInformationInput/PersonalInformationInput";

export default function Resume() {
    const [tabSelected, setTabSelected] = useState("content");

    function tabSelectHandler(event) {
        setTabSelected(event.target.value);
    }

    /* Personal Information State and Update Function */
    const [personal, setPersonal] = useState({
        fullName: "Markus Jarvis",
        email: "markus.h.jarvis@gmail.com",
        address: "123 Main Ave SE, Huntsville, AL 36362",
        phoneNumber: "855.545.3421",
        linkedIn: "linkedin.com/markusjarvis",
        github: "github.com/mhjarvis",
    });

    function personalHandler(event) {
        setPersonal({
            ...personal, // copy the old fields
            [event.target.id]: event.target.value,
        });
    }

    return (
        <div className="main">
            <div className="input">
                <ButtonPanel tab={tabSelected} onTabUpdate={tabSelectHandler} />
                <section className="input-section">
                    <PersonalInformationInput
                        formClasses="personal-information-form"
                        onPersonalUpdate={personalHandler}
                        personal={personal}
                    />
                </section>
            </div>
            <Output personal={personal} />
        </div>
    );
}
