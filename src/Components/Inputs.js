// import React from "react";
// import {useForm} from "react-hook-form";
//
// function Input({labelId, labelText, inputType, children, inputName}) {
//
//     const {register, formState: {errors}} = useForm();
//
//     return (
//         <label htmlFor={labelId}>
//             {labelText}
//             <input
//                 type={inputType}
//                 id={labelId}
//                 {children}
//                 {...register({inputName}, {required:{requiredMessage}, {children}})}
//             />
//         </label>
//         {errors.{inputName} && <p className="error-message">{errors.{inputName}.message}</p>}
//     )
// }
//
// export default Input;