/* eslint-disable no-unused-vars */

import "./Resume.css";
import ButtonPanel from "./ButtonPanel/ButtonPanel";
import Output from "./Output/Output";
import { useState } from "react";
import PersonalInformationInput from "./PersonalInformationInput/PersonalInformation";
import Education from "./Education/Education";
import ProfessionalExpierence from "./ProfessionalExperience/ProfessionalExperience";

export default function Resume() {
    /**
     * Tab Selectors for switching between input (Content) and Customize sections
     */
    const [tabSelected, setTabSelected] = useState("content");
    function tabSelectHandler(event) {
        setTabSelected(event.target.value);
    }
    /**
     *  Input section state variables
     */
    const [education, setEducation] = useState({
        degree: "",
        school: "",
        schoolCity: "",
        schoolState: "",
        schoolStartDate: "",
        schoolEndDate: "",
    });
    const [personal, setPersonal] = useState({
        fullName: "Peter Williamson",
        email: "petersawesomeemail@gmail.com",
        address: "123 Main Ave SE, Madison, AL 34872",
        phoneNumber: "855.545.3421",
        linkedIn: "linkedin.com/petertheprogrammer",
        github: "github.com/mhjarvis",
    });
    const [professional, setProfessional] = useState({
        employer: "U.S. Army",
        jobTitle: "Soldier",
        employmentStartDate: "January 2014",
        employmentEndDate: "January 2020",
        location: "Ft. Benning, GA",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    });
    /**
     * Stored content (filler / saved information by user)
     */
    const [pastEducationArr, setPastEducationArr] = useState([
        {
            degree: "Life Sciences, B.S.",
            school: "University of Washington",
            schoolCity: "Seattle",
            schoolState: "WA",
            schoolStartDate: "Sep 2011",
            schoolEndDate: "May 2015",
        },
        {
            degree: "Software Development / CyberSecurity, B.S.",
            school: "University of Portland",
            schoolCity: "Portland",
            schoolState: "OR",
            schoolStartDate: "Sep 2015",
            schoolEndDate: "May 2019",
        },
    ]);
    const [pastPersonal, setPastPersonal] = useState({
        fullName: "Peter Williamson",
        email: "petersawesomeemail@gmail.com",
        address: "123 Main Ave SE, Madison, AL 34872",
        phoneNumber: "855.545.3421",
        linkedIn: "linkedin.com/petertheprogrammer",
        github: "github.com/mhjarvis",
    });
    /**
     * Input update functions
     */
    function personalHandler(event) {
        setPersonal({
            ...personal, // copy the old fields
            [event.target.id]: event.target.value,
        });
    }
    function educationHandler(event) {
        setEducation({
            ...education, // copy the old fields
            [event.target.id]: event.target.value,
        });
    }
    function professionalHandler(event) {
        setProfessional({
            ...professional, // copy the old fields
            [event.target.id]: event.target.value,
        });
    }
    /*
     * Functions to handle saved information arrays/objects
     */
    function addToEducationArray() {
        // Add current education state to arr
        setPastEducationArr([...pastEducationArr, education]);
        clearEducation();
    }
    function deleteEducationElement(index) {
        const arr = [...pastEducationArr];
        arr.splice(index, 1);
        setPastEducationArr(arr);
    }
    function editElementFromPastEducationArray(index) {
        setEducation({ ...pastEducationArr[index] });
        deleteEducationElement(index);
    }
    function addToPastPersonal() {
        console.log("saving yuppers");
    }
    function deletePastPersonal() {
        console.log("delete yuppers");
    }
    function editPastPersonal() {
        console.log("edititing yuppers");
    }
    /*
     * Functions to clear input fields / reset fields
     */
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
                        // Saves the state of information in a container
                        pastPersonal={pastPersonal}
                        addToPastPersonal={addToPastPersonal}
                        deletePastPersonal={deletePastPersonal}
                        editPastPersonal={editPastPersonal}
                    />
                    <Education
                        formClasses="education-form"
                        onEducationUpdate={educationHandler}
                        education={education}
                        pastEducationArr={pastEducationArr}
                        deleteEducationElement={deleteEducationElement}
                        editElementFromPastEducationArray={
                            editElementFromPastEducationArray
                        }
                        onAddToEducationArr={addToEducationArray}
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
                pastEducationArr={pastEducationArr}
                professional={professional}
            />
        </div>
    );
}
