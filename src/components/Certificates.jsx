export default function Certificates() {
    return (
        <div className="certificates-container section-container">
            <h2 className="section-heading certificates-heading">
                Certificates
            </h2>
            <div className="added-certificates-container"></div>
            <input type="text" placeholder="Enter certificate" />
            <input type="text" placeholder="Additional Information" />
            <button>Add Certificate</button>
        </div>
    );
}
