/* eslint-disable react/prop-types */
import icon_email from "../../images/icon_email.svg";
import icon_phone from "../../images/icon_phone.svg";
import icon_address from "../../images/icon_address.svg";
import icon_linkedin from "../../images/icon_linkedin.svg";
import icon_github from "../../images/icon_github.svg";

import "./Output.css";
import EducationOutput from "../Education/EducationOutput";
import ProfessionalExpierenceOutput from "../ProfessionalExperience/ProfessionalExperienceOutput";

export default function Output({ personal, education, professional }) {
    return (
        <div className="output-container">
            <section>
                <h1 className="output-fullName">{personal.fullName}</h1>
                <div className="output-personal-info-secondary">
                    <span>
                        {personal.email ? (
                            <img
                                src={icon_email}
                                alt="email icon"
                                className="icon"
                            />
                        ) : (
                            ""
                        )}
                        {personal.email}
                    </span>
                    <span>
                        <img
                            src={icon_phone}
                            alt="phone icon"
                            className="icon"
                        />
                        {personal.phoneNumber}
                    </span>
                    <span>
                        <img
                            src={icon_address}
                            alt="address icon"
                            className="icon"
                        />
                        {personal.address}
                    </span>
                </div>
                <div className="output-personal-info-third">
                    <span>
                        <img
                            src={icon_linkedin}
                            alt="linkedIn icon"
                            className="icon"
                        />
                        {personal.linkedIn}{" "}
                    </span>
                    <span>
                        <img
                            src={icon_github}
                            alt="github icon"
                            className="icon"
                        />
                        {personal.github}
                    </span>
                </div>
            </section>
            <EducationOutput education={education} />
            <ProfessionalExpierenceOutput professional={professional} />
        </div>
    );
}
