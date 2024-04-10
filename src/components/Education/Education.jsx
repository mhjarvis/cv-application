/* eslint-disable react/prop-types */

import LabelWithInput from "../LabelWithInput";
import "./Education.css";

function onChangeHandler() {
    console.log("?");
}

export default function Education() {
    return (
        <div>
            <form action="">
                <h1 className="education-title">Education</h1>
                <LabelWithInput
                    id="degree"
                    labelTitle="Degree"
                    inputType="text"
                    value=""
                    onChange={onChangeHandler}
                />
            </form>
        </div>
    );
}
