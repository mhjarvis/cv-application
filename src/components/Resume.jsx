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
        fullName: "",
        email: "",
        address: "",
        phoneNumber: "",
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
                        fullName={personal.fullName}
                        email={personal.email}
                        address={personal.address}
                        phoneNumber={personal.phoneNumber}
                    />
                </section>
            </div>
            <Output personal={personal} />
        </div>
    );
}
