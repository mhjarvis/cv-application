/* eslint-disable react/prop-types */

export default function InputSpan({
  inputLabel,
  inputClass,
  inputPlaceHolder,
}) {
  return (
    <span>
      <label>{inputLabel}</label>
      <input className={inputClass} placeholder={inputPlaceHolder}></input>
    </span>
  );
}
