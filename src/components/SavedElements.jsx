/* eslint-disable react/prop-types */

import "./SavedElements.css";

export default function SavedElement({ arr, deleteEducationElement }) {
    return (
        <div className="saved-elements-container">
            <div className="saved-element">
                {arr.map((el, index) => (
                    <div key={index} className="saved-element-education-box">
                        <div className="saved-element-education-info-holder">
                            <p className="saved-element-education-degree">
                                {el.degree}
                            </p>
                            {/* show the following if there is a school element */}
                            {el.school ? (
                                <p className="saved-element-education-school">
                                    , {el.school}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                        <button onClick={() => deleteEducationElement(index)}>
                            x
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
