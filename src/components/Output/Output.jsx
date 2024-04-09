/* eslint-disable react/prop-types */

import "./Output.css";

export default function Output({ personal }) {
    return (
        <div className="output-container">
            <section>
                <h1 className="output-fullName">{personal.fullName}</h1>
                <div className="output-personal-info-secondary">
                    {personal.email} | {personal.phoneNumber} |{" "}
                    {personal.address}
                </div>
                <div className="output-personal-info-third">
                    {personal.linkedIn} {personal.github}
                </div>
            </section>
        </div>
    );
}
