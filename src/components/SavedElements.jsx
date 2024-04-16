/* eslint-disable react/prop-types */

import "./SavedElements.css";

export default function SavedElement({ arr, deleteEducationElement }) {
    return (
        <div className="saved-elements-container">
            <div className="saved-element">
                {arr.map((el, index) => (
                    <div key={index}>
                        <p>{el.degree}</p>
                        <button onClick={() => deleteEducationElement(index)}>
                            x
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
