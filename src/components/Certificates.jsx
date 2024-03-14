export default function Certificates() {
    return (
        <div className="certificates-container">
            <h2 className="certificates-heading">Certificates</h2>
            <div className="added-certificates-container"></div>
            <input type="text" placeholder="Enter certificate" />
            <input type="text" placeholder="Additional Information" />
            <button>Add Certificate</button>
        </div>
    );
}
