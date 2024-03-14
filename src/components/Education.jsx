export default function Education() {
    return (
        <div className="education-container">
            <h2 className="education-title">Education</h2>
            <input
                type="text"
                className="degree-input"
                placeholder="Enter Degree"
            />
            <input
                type="text"
                className="school"
                placeholder="Enter school / university"
            />
            <div className="education-location-container">
                <input
                    type="text"
                    className="education-city"
                    placeholder="Enter City"
                />
                <input
                    type="text"
                    className="education-country"
                    placeholder="Enter Country"
                />
            </div>

            <div className="education-dates-container">
                <div className="education-start-container">
                    <input
                        type="text"
                        className="education-start-month"
                        placeholder="Start Month"
                    />
                    <input
                        type="text"
                        className="education-start-year"
                        placeholder="Start Year"
                    />
                </div>
                <div className="education-end-container">
                    <input
                        type="text"
                        className="education-end-month"
                        placeholder="End Month"
                    />
                    <input
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
