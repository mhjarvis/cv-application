import "../styles/PersonalDetails.css";
import InputElement from "./InputElement";

export default function PersonalDetails() {
  return (
    <div className="personal-details-container">
      <h2 className="personal-details-header">Personal Details</h2>
      <InputElement
        inputLabel="FULL NAME"
        inputClass="full-name"
        inputPlaceHolder="Enter your full name"
      />
    </div>
  );
}
