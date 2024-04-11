import "./Resume.css";
import ButtonPanel from "./ButtonPanel/ButtonPanel";
import Output from "./Output/Output";
import { useState } from "react";
import PersonalInformationInput from "./PersonalInformationInput/PersonalInformation";
import Education from "./Education/Education";
import ProfessionalExpierence from "./ProfessionalExperience/ProfessionalExperience";

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

    /* Eductation Information */
    const [education, setEducation] = useState({
        degree: "",
        school: "University of Alabama",
        schoolCity: "Birmingham",
        schoolState: "Alabama",
        schoolStartDate: "Sep 2017",
        schoolEndDate: "May 2021",
    });

    function educationHandler(event) {
        setEducation({
            ...education, // copy the old fields
            [event.target.id]: event.target.value,
        });
    }

    /* Professional Experience Information */
    const [professional, setProfessional] = useState({
        employer: "U.S. Army",
        jobTitle: "Soldier",
        employmentStartDate: "January 2014",
        employmentEndDate: "January 2020",
        location: "Ft. Benning, GA",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    });

    function professionalHandler(event) {
        setProfessional({
            ...professional, // copy the old fields
            [event.target.id]: event.target.value,
        });
    }

    function clearEducation() {
        setEducation({
            degree: "",
            school: "",
            schoolCity: "",
            schoolState: "",
            schoolStartDate: "",
            schoolEndDate: "",
        });
    }
    function clearPersonal() {
        setPersonal({
            fullName: "",
            email: "",
            address: "",
            phoneNumber: "",
            linkedIn: "",
            github: "",
        });
    }
    function clearProfessional() {
        setProfessional({
            employer: "",
            jobTitle: "",
            employmentStartDate: "",
            employmentEndDate: "",
            location: "",
            description: "",
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
                        clearPersonal={clearPersonal}
                    />
                    <Education
                        formClasses="education-form"
                        onEducationUpdate={educationHandler}
                        education={education}
                        clearEducation={clearEducation}
                    />
                    <ProfessionalExpierence
                        formClasses="professional-form"
                        onProfessionalUpdate={professionalHandler}
                        professional={professional}
                        clearProfessional={clearProfessional}
                    />
                </section>
            </div>
            <Output
                personal={personal}
                education={education}
                professional={professional}
            />
        </div>
    );
}
