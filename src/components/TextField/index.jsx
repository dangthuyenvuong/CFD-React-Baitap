import React from 'react'

export const TextField = ({ label, value, errorText, ...rest }) => {
    return (
        <label>
            <div className="label">{label}</div>
            <input type="text" value={value} {...rest}/>
            <p className="error-text">{errorText}</p>
        </label>
    )
}

export default TextField
