/* eslint-disable react/prop-types */
import "./ComponentButtons.css";

export default function ComponentButtons({
    clearComponent,
    onAddToEducationArr,
}) {
    return (
        <div className="component-buttons-container">
            <button
                className="component-buttons-save"
                type="button"
                onClick={onAddToEducationArr}
            >
                Save
            </button>
            <button
                className="component-buttons-clear"
                type="button"
                onClick={clearComponent}
            >
                Clear
            </button>
        </div>
    );
}
