/* eslint-disable react/prop-types */
import "./ProfessionalExperience.css";
import LabelWithInput from "../LabelWithInput";
import ComponentButtons from "../ComponentButtons";

export default function ProfessionalExpierence({
    professional,
    onProfessionalUpdate,
    formClasses,
    clearProfessional
}) {
    return (
        <div>
            <form action="" className={formClasses}>
                <h1 className="professional-title">Professional Experience</h1>
                <LabelWithInput
                    id="employer"
                    labelTitle="Employer"
                    inputType="text"
                    value={professional.employer}
                    onChangeHandler={onProfessionalUpdate}
                />
                <LabelWithInput
                    id="jobTitle"
                    labelTitle="Job Title"
                    inputType="text"
                    value={professional.jobTitle}
                    onChangeHandler={onProfessionalUpdate}
                />{" "}
                <LabelWithInput
                    id="employmentStartDate"
                    labelTitle="Start Date"
                    inputType="text"
                    value={professional.employmentStartDate}
                    onChangeHandler={onProfessionalUpdate}
                />{" "}
                <LabelWithInput
                    id="employmentEndDate"
                    labelTitle="End Date"
                    inputType="text"
                    value={professional.employmentEndDate}
                    onChangeHandler={onProfessionalUpdate}
                />{" "}
                <LabelWithInput
                    id="location"
                    labelTitle="Location"
                    inputType="text"
                    value={professional.location}
                    onChangeHandler={onProfessionalUpdate}
                />{" "}
                <LabelWithInput
                    id="description"
                    labelTitle="Description"
                    inputType="textarea"
                    
                    value={professional.description}
                    onChangeHandler={onProfessionalUpdate}
                />
                <ComponentButtons clearComponent={clearProfessional}/>
            </form>
        </div>
    );
}
