/* eslint-disable react/prop-types */
import "./ProfessionalExperience.css";
import LabelWithInput from "../LabelWithInput";

export default function ProfessionalExpierence({
    professional,
    onProfessionalUpdate,
    formClasses,
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
            </form>
        </div>
    );
}
