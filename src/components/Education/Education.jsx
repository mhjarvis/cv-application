/* eslint-disable react/prop-types */
import ComponentButtons from "../ComponentButtons";
import LabelWithInput from "../LabelWithInput";
import "./Education.css";

export default function Education({
    education,
    onEducationUpdate,
    formClasses,
}) {
    return (
        <div>
            <form action="" className={formClasses}>
                <h1 className="education-title">Education</h1>
                <LabelWithInput
                    id="degree"
                    labelTitle="Degree"
                    inputType="text"
                    value={education.degree}
                    onChangeHandler={onEducationUpdate}
                />
                <LabelWithInput
                    id="school"
                    labelTitle="School"
                    inputType="text"
                    value={education.school}
                    onChangeHandler={onEducationUpdate}
                />{" "}
                <LabelWithInput
                    id="schoolCity"
                    labelTitle="City"
                    inputType="text"
                    value={education.schoolCity}
                    onChangeHandler={onEducationUpdate}
                />{" "}
                <LabelWithInput
                    id="schoolState"
                    labelTitle="State"
                    inputType="text"
                    value={education.schoolState}
                    onChangeHandler={onEducationUpdate}
                />
                <LabelWithInput
                    id="schoolStartDate"
                    labelTitle="Start Date"
                    inputType="text"
                    value={education.schoolStartDate}
                    onChangeHandler={onEducationUpdate}
                />{" "}
                <LabelWithInput
                    id="schoolEndDate"
                    labelTitle="End Date"
                    inputType="text"
                    value={education.schoolEndDate}
                    onChangeHandler={onEducationUpdate}
                />{" "}
                <ComponentButtons />
            </form>
        </div>
    );
}
