/* eslint-disable react/prop-types */

export default function LabelWithInput({
    id,
    labelTitle,
    inputType,
    value,
    onChangeHandler,
}) {
    return (
        <>
            <label htmlFor={id}>{labelTitle}</label>
            <input
                id={id}
                type={inputType}
                value={value}
                onChange={onChangeHandler}
            />
        </>
    );
}
