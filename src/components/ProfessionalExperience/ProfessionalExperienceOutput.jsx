/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./ProfessionalExperienceOutput.css";
import "./PastProfessionalExperienceRecord";
import Seperator from "../Output/Seperator";
import PastProfessionalExperienceRecord from "./PastProfessionalExperienceRecord";
export default function ProfessionalExpierenceOutput({
    professional,
    pastProfessional,
}) {
    return (
        <div className="education-output-component professional-output-component">
            <h1>Professional Experience</h1>
            <Seperator />
            <PastProfessionalExperienceRecord
                addClass={"stored-education-output-active"}
                record={professional}
            />
            <div className="stored-education-output">
                {pastProfessional.map((record, index) => (
                    <PastProfessionalExperienceRecord
                        record={record}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}

/* {
    const liveOutput = (
        <div className="professional-output-component">
            <h1 className="bold">Professional Experience</h1>
            <Seperator />
            <div className="professional-output-section">
                <div className="professional-output-top">
                    {" "}
                    <p className="professional-output-top-left">
                        <span className="bold">{professional.employer}</span>,{" "}
                        <span className="italic">{professional.jobTitle}</span>
                    </p>
                    <span className="professional-output-top-right">
                        {professional.employmentStartDate} -{" "}
                        {professional.employmentEndDate}
                    </span>
                </div>
                <span className="professional-output-bottom">
                    {professional.description}
                </span>
            </div>
        </div>
    );

    let savedOutput = pastProfessional.map((el, index) => {
        <>
            <div key={index}>{el.jobTitle}</div>;
        </>;
    });

    if (pastProfessional.length > 0) {
        return (
            <>
                <div>{savedOutput}</div>
                <div>{liveOutput}</div>
            </>
        );
    }
} */
