import Inputs from "../Inputs";
import "./Certificates.css";

export default function Certificates() {
    return (
        <div className="certificates-container section-container">
            <h2 className="section-heading certificates-heading">
                Certificates
            </h2>
            <div className="added-certificates-container"></div>
            <Inputs
                type="text"
                className="certificate-name-input"
                placeholder="Enter certificate"
            />
            <Inputs
                type="text"
                className="certificate-additional-information-input"
                placeholder="Additional Information"
            />
            <button>Add Certificate</button>
        </div>
    );
}
