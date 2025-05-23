import React from "react";
import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        
        {
            label && (
                <label className={`${otherProps.value.length > 0 ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            )
        }
    </div>
)

export default FormInput;