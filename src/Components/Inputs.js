import React from "react";
import {useForm} from "react-hook-form";

function Input({labelId, labelText, inputType, children}) {

    return (
        <label htmlFor={labelId}>
            {labelText}
            <input
                type={inputType}
                id={labelId}
                {children}

            />
        </label>

    )
}

export default Input;