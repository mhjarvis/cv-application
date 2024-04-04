import { useState } from "react";
import "./ButtonPanel.css";

export default function ButtonPanel() {
    const [tabSelected, setTabSelected] = useState("content");

    function tabSelectHandler(event) {
        setTabSelected(event.target.value);
    }

    return (
        <div className="button-panel">
            <button
                className={tabSelected === "content" ? "active" : 'white'}
                value="content"
                onClick={tabSelectHandler}
            >
                Content
            </button>
            <button
                className={tabSelected === "customize" ? "active" : 'white'}
                value="customize"
                onClick={tabSelectHandler}
            >
                Customize
            </button>
        </div>
    );
}
