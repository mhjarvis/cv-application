/* eslint-disable react/prop-types */

import "./SavedElements.css";

export default function SavedElement({ arr, deleteEducationElement }) {
    console.log(typeof WORKINGONTHISONE);
    return (
        <div className="saved-elements-container">
            <div className="saved-element">
                {arr.map((el, index) => (
                    <>
                        <p key={index}>{el.degree}</p>
                        <button onClick={deleteEducationElement}>x</button>
                    </>
                ))}
            </div>
        </div>
    );
}
