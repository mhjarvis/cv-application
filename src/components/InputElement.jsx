/* eslint-disable react/prop-types */

import { useState } from "react";

export default function InputElement({
  inputLabel,
  labelClass,
  inputClass,
  inputPlaceHolder,
}) {
  const [userInput, setUserInput] = useState(inputPlaceHolder);

  function handleInput(e) {
    setUserInput(e);
  }

  return (
    <span>
      <label className={labelClass}>{inputLabel}</label>
      <input
        className={inputClass}
        placeholder={userInput}
        onChange={(event) => handleInput(event.target.value)}
      ></input>
    </span>
  );
}
