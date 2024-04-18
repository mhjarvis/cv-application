/* eslint-disable react/prop-types */
import icon_email from "../../images/icon_email.svg";
import icon_phone from "../../images/icon_phone.svg";
import icon_address from "../../images/icon_address.svg";
import icon_linkedin from "../../images/icon_linkedin.svg";
import icon_github from "../../images/icon_github.svg";

export default function PersonalInformationOutput({ personal, pastPersonal }) {
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

    let objectValue = { ...personal };

    if (pastPersonal.fullName) {
        objectValue = { ...pastPersonal };
    }

    return (
        <section>
            <h1 className="output-fullName">{objectValue.fullName}</h1>
            <div className="output-personal-info-secondary">
                <span>
                    {objectValue.email ? emailIcon : ""}
                    {objectValue.email}
                </span>
                <span>
                    {objectValue.phoneNumber ? phoneIcon : ""}
                    {objectValue.phoneNumber}
                </span>
                <span>
                    {objectValue.address ? addressIcon : ""}
                    {objectValue.address}
                </span>
            </div>
            <div className="output-personal-info-third">
                <span>
                    {objectValue.linkedIn ? linkedInIcon : ""}
                    {objectValue.linkedIn}{" "}
                </span>
                <span>
                    {objectValue.github ? githubIcon : ""}
                    {objectValue.github}
                </span>
            </div>
        </section>
    );
}
