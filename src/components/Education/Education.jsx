import Inputs from "../Inputs";
import "./Education.css";

export default function Education() {
    return (
        <div className="education-container section-container">
            <h2 className="section-heading education-heading">Education</h2>
            <Inputs
                type="text"
                className="degree-input"
                placeholder="Enter degree"
            />

            <Inputs
                type="text"
                className="school"
                placeholder="Enter school / university"
            />
            <div className="education-location-container">
                <Inputs
                    type="text"
                    className="education-city"
                    placeholder="Enter City"
                />
                <Inputs
                    type="text"
                    className="education-country"
                    placeholder="Enter Country"
                />
            </div>

            <div className="education-dates-container">
                <div className="education-start-container">
                    <Inputs
                        type="text"
                        className="education-start-month"
                        placeholder="Start Month"
                    />
                    <Inputs
                        type="text"
                        className="education-start-year"
                        placeholder="Start Year"
                    />
                </div>
                <div className="education-end-container">
                    <Inputs
                        type="text"
                        className="education-end-month"
                        placeholder="End Month"
                    />
                    <Inputs
                        type="text"
                        className="education-end-year"
                        placeholder="End Year"
                    />
                </div>
            </div>

            <button>+ Education</button>
        </div>
    );
}
