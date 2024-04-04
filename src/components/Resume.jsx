import "./Resume.css";
import ButtonPanel from "./ButtonPanel/ButtonPanel";
import { useState } from "react";

export default function Resume() {
    const [tabSelected, setTabSelected] = useState("content");

    function tabSelectHandler(event) {
        setTabSelected(event.target.value);
    }

    return (
        <div className="main">
            <div className="input">
                <ButtonPanel tab={tabSelected} onTabUpdate={tabSelectHandler} />
                BUTTON SECTION PERSONAL DETAILS EDUCATION DETAILS EXPERIENCE
                DETAILS SKILLS CERTIFICATES
            </div>
            <div className="output">
                
            </div>
        </div>
    );
}
