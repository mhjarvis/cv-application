import InputSpan from "./InputSpan";
import "./PersonalInformation.css";

export default function PersonalInformation() {
  return (
    <div className="personal-info-container">
			<h2 className="personal-info-header">Personal Information</h2>
      <InputSpan
        inputLabel="Full Name"
        inputClass="name"
        inputPlaceHolder="First / Last Name"
        inputType="text"
      />
      <InputSpan
        inputLabel="Email"
        inputClass="email"
        inputPlaceHolder="Email"
        inputType="email"
      />
      <InputSpan
        inputLabel="Phone Number"
        inputClass="phone"
        inputPlaceHolder="Enter Phone Number"
        inputType="number"
      />
      <InputSpan
        inputLabel="Street"
        inputClass="street"
        inputPlaceHolder="Street Address"
        inputType="text"
      />
      <InputSpan
        inputLabel="City"
        inputClass="city"
        inputPlaceHolder="City"
        inputType="text"
      />
      <div id="state-zip-container">
        <InputSpan
          inputLabel="State"
          inputClass="state"
          inputPlaceHolder="State"
          inputType="text"
        />
        <InputSpan
          inputLabel="Zip Code"
          inputClass="zip"
          inputPlaceHolder="Zip"
          inputType="number"
        />
      </ div>
    </div>
  );
}
