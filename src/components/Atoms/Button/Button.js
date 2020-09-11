import React from "react";
import "./Button.css";

export function Button({ handleOnClick, isDisabled = true, displayText = "" }) {
    return (
        <input
            className='Submit-btn'
            type='submit'
            value={displayText}
            onClick={handleOnClick}
            disabled={isDisabled}
        />
    );
}
