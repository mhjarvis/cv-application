/* eslint-disable react/prop-types */

import LabelWithInput from "../LabelWithInput";
import "./Education.css";

function onChangeHandler() {
    console.log("?");
}

export default function Education() {
    return (
        <div>
            <form action="" className="education-form">
                <h1 className="education-title">Education</h1>
                <LabelWithInput
                    id="degree"
                    labelTitle="Degree"
                    inputType="text"
                    value="Psychology"
                    onChange={onChangeHandler}
                />
                <LabelWithInput
                    id="school"
                    labelTitle="School"
                    inputType="text"
                    value="University of Alabama"
                    onChange={onChangeHandler}
                />{" "}
                <LabelWithInput
                    id="schoolCity"
                    labelTitle="City"
                    inputType="text"
                    value="Birmingham"
                    onChange={onChangeHandler}
                />{" "}
                <LabelWithInput
                    id="schoolState"
                    labelTitle="State"
                    inputType="text"
                    value="AL"
                    onChange={onChangeHandler}
                />
                <LabelWithInput
                    id="schoolStartDate"
                    labelTitle="Start Date"
                    inputType="text"
                    value="Aug 2017"
                    onChange={onChangeHandler}
                />{" "}
                <LabelWithInput
                    id="schoolEndDate"
                    labelTitle="End Date"
                    inputType="text"
                    value="May 2021"
                    onChange={onChangeHandler}
                />
            </form>
        </div>
    );
}
