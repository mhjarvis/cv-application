/* eslint-disable react/prop-types */

import "./SavedElements.css";

export default function SavedElement({ arr, deleteEducationElement }) {
    return (
        <div className="saved-elements-container">
            <div className="saved-element">
                {arr.map((el, index) => (
                    <>
                        <p key={index}>{el.degree}</p>
                        <button key={el + index} onClick={deleteEducationElement}>x</button>
                    </>
                ))}
            </div>
        </div>
    );
}
