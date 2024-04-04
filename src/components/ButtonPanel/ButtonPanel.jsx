/* eslint-disable react/prop-types */

import "./ButtonPanel.css";

export default function ButtonPanel({ tab, onTabUpdate }) {
    return (
        <div className="button-panel">
            <button
                className={tab === "content" ? "active" : "white"}
                id="content-button"
                value="content"
                onClick={onTabUpdate}
            >
                Content
            </button>
            <button
                className={tab === "customize" ? "active" : "white"}
                id="customize-button"
                value="customize"
                onClick={onTabUpdate}
            >
                Customize
            </button>
        </div>
    );
}
