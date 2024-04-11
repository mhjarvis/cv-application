/* eslint-disable react/prop-types */

import "./TextArea.css";
export default function TextArea({ id, labelTitle, value, onChangeHandler }) {
    return (
        <div className="textarea-container">
            <label htmlFor={id}>{labelTitle}</label>
            <textarea
                className="textarea"
                name={id}
                id={id}
                rows="6"
                value={value}
                onChange={onChangeHandler}
            ></textarea>
        </div>
    );
}
