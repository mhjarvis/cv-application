import "./Resume.css";
import ButtonPanel from "./ButtonPanel/ButtonPanel";
import Output from "./Output/Output";
import { useState } from "react";

export default function Resume() {
    const [tabSelected, setTabSelected] = useState("content");
    const [inputSelected, setInputSelected] = useState("personalInfo");

    function tabSelectHandler(event) {
        setTabSelected(event.target.value);
    }

    return (
        <div className="main">
            <div className="input">
                <ButtonPanel tab={tabSelected} onTabUpdate={tabSelectHandler} />

                {inputSelected === "personalInfo" ? (
                    <button>Personal Info</button>
                ) : (
                    ""
                )}
            </div>
            <Output />
        </div>
    );
}
