import React from 'react';
import {useField} from "formik";

const MyInput = (props) => {
    const {label,name, ...rest} = props;

    const [field, meta] = useField(name);

    return (
        <>
            <div className='shopping-form-field'>
                <label className='label'>{label}<span className='required'>*</span></label>
                <input {...field} {...rest}/>
            </div>
            {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
        </>
);
};

export default MyInput;