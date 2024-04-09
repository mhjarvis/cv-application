/* eslint-disable react/prop-types */
import "./PersonalInformationInput.css";

export default function PersonalInformationInput({
    fullName,
    email,
    address,
    phoneNumber,
    onPersonalUpdate,
    formClasses,
}) {
    return (
        <div>
            <form action="" className={formClasses}>
                <label htmlFor="fullName">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={onPersonalUpdate}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={onPersonalUpdate}
                />
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={onPersonalUpdate}
                />
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={onPersonalUpdate}
                />
            </form>
        </div>
    );
}
