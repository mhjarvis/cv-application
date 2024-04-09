/* eslint-disable react/prop-types */

import "./Output.css";

export default function Output({ personal }) {
    return (
        <div className="output-container">
            <section>
                <h1 className="output-fullName">{personal.fullName}</h1>
            </section>
        </div>
    );
}
