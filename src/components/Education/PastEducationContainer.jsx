/* eslint-disable react/prop-types */
import "./PastEducationContainer.css";
import icon_edit from "../../images/icon-edit.svg";

export default function PastEducationContainer({
    pastEducationArr,
    deleteElementFromPastEducationArray,
}) {
    return (
        <div className="pec-container">
            {pastEducationArr.map((record, index) => (
                <div className="pec-container-element" key={index}>
                    <div className="pec-line-1">
                        <div className="pec-line-1-container">
                            <div className="pec-line-1-info">
                                <p className="pec-line-1-degree">
                                    {record.degree}
                                </p>
                                <p className="pec-line-1-school">
                                    , {record.school}
                                </p>
                            </div>
                            <div className="education-buttons-container">
                                <button className="pec-edit-button">
                                    <img src={icon_edit} alt="edit icon" />
                                </button>
                                <button
                                    className="pec-delete-button"
                                    onClick={() =>
                                        deleteElementFromPastEducationArray(
                                            index
                                        )
                                    }
                                >
                                    x
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pec-line-2">
                        <p className="pec-line-2-dates">
                            {record.schoolStartDate} - {record.schoolEndDate}
                        </p>
                        {/* add seperator is there is a start or end date */}
                        {record.schoolStartDate || record.schoolEndDate ? (
                            <span className="seperator-spacer">|</span>
                        ) : (
                            ""
                        )}
                        <p className="pec-line-2-location">
                            {record.schoolCity}, {record.schoolState}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

{
    /*
<div className="saved-elements-container">
<div className="saved-element">
    {arr.map((el, index) => (
        <div key={index} className="saved-element-education-box">
            <div className="saved-element-education-info-holder">
                <p className="saved-element-education-degree">
                    {el.degree}
                </p>
                {/* show the following if there is a school element */
}
/* {el.school ? (
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
</div> */
