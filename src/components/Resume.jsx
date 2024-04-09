import "./Resume.css";
import ButtonPanel from "./ButtonPanel/ButtonPanel";
import Output from "./Output/Output";
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
                <section className="input-section">
                    
                </section>
            </div>
            <Output />
        </div>
    );
}
