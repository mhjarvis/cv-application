/* eslint-disable react/prop-types */

export default function PersonalInformationInput({
    fullName,
    email,
    onPersonalUpdate,
    formClasses,
}) {
    /*     function fullNameHandler(event) {
        setFullName(event.target.value);
    }

    function emailHandler(event) {
        setEmail(event.target.value);
    } */

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
            </form>
        </div>
    );
}
