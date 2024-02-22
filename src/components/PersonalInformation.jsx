import "./PersonalInformation.css";

export default function PersonalInformation() {
  return (
    <div className="personal-info-container">
      <span>
        <label>Full Name</label>
        <input className="name" placeholder="First / Last Name"></input>
      </span>
      <span>
        <label>Email</label>
        <input className="email" placeholder="Enter Email"></input>
      </span>
      <span>
        <label>Phone Number</label>
        <input className="phone" placeholder="Enter Phone Number"></input>
      </span>
      <span>
        <label>Street</label>
        <input className="street" placeholder="Street"></input>
      </span>
      <span>
        <label>City</label>
        <input className="city" placeholder="City"></input>
      </span>
      <span>
        <label>State</label>
        <input className="state" placeholder="State"></input>
      </span>
      <span>
        <label>Zip</label>
        <input className="zip" placeholder="Zip Code"></input>
      </span>
    </div>
  );
}
