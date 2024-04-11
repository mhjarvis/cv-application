/* eslint-disable react/prop-types */
import "./ComponentButtons.css";

export default function ComponentButtons({ clearEducation }) {
    return (
        <div className="component-buttons-container">
            <button className="component-buttons-save" type="button">
                Save
            </button>
            <button
                className="component-buttons-clear"
                type="button"
                onClick={clearEducation}
            >
                Clear
            </button>
        </div>
    );
}
