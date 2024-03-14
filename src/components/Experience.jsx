export default function Experience() {
    return (
        <div className="experience-container section-container">
            <h2 className="section-heading experience-heading">
                Professional Experience
            </h2>
            <div className="added-experience-container"></div>

            <input type="text" placeholder="Employer" />
            <input type="text" placeholder="Job title" />

            <div className="experience-location-container">
                <input
                    type="text"
                    className="experience-city"
                    placeholder="Enter City"
                />
                <input
                    type="text"
                    className="experience-country"
                    placeholder="Enter Country"
                />
            </div>

            <div className="experience-dates-container">
                <div className="experience-start-container">
                    <input
                        type="text"
                        className="experience-start-month"
                        placeholder="Start Month"
                    />
                    <input
                        type="text"
                        className="experience-start-year"
                        placeholder="Start Year"
                    />
                </div>
                <div className="experience-end-container">
                    <input
                        type="text"
                        className="experience-end-month"
                        placeholder="End Month"
                    />
                    <input
                        type="text"
                        className="experience-end-year"
                        placeholder="End Year"
                    />
                </div>
            </div>
            <button className="add-experience-button">+ Experience</button>
        </div>
    );
}
