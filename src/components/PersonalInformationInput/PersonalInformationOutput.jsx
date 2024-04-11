/* eslint-disable react/prop-types */
import icon_email from "../../images/icon_email.svg";
import icon_phone from "../../images/icon_phone.svg";
import icon_address from "../../images/icon_address.svg";
import icon_linkedin from "../../images/icon_linkedin.svg";
import icon_github from "../../images/icon_github.svg";

export default function PersonalInformationOutput({ personal }) {
    const emailIcon = (
        <img src={icon_email} alt="phone icon" className="icon" />
    );
    const phoneIcon = (
        <img src={icon_phone} alt="phone icon" className="icon" />
    );
    const addressIcon = (
        <img src={icon_address} alt="address icon" className="icon" />
    );
    const linkedInIcon = (
        <img src={icon_linkedin} alt="linkedIn icon" className="icon" />
    );
    const githubIcon = (
        <img src={icon_github} alt="github icon" className="icon" />
    );

    return (
        <section>
            <h1 className="output-fullName">{personal.fullName}</h1>
            <div className="output-personal-info-secondary">
                <span>
                    {personal.email ? emailIcon : ""}
                    {personal.email}
                </span>
                <span>
                    {personal.phoneNumber ? phoneIcon : ""}
                    {personal.phoneNumber}
                </span>
                <span>
                    {personal.address ? addressIcon : ""}
                    {personal.address}
                </span>
            </div>
            <div className="output-personal-info-third">
                <span>
                    {personal.linkedIn ? linkedInIcon : ""}
                    {personal.linkedIn}{" "}
                </span>
                <span>
                    {personal.github ? githubIcon : ""}
                    {personal.github}
                </span>
            </div>
        </section>
    );
}
