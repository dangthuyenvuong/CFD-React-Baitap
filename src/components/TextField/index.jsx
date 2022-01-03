import React from 'react'

export const TextField = ({ label, value = '', errorText, onChange, ...rest }) => {
    return (
        <label>
            <div className="label">{label}</div>
            <input type="text" value={value} onChange={onChange} {...rest}/>
            <p className="error-text" style={{color: 'red'}}>{errorText}</p>
        </label>
    )
}

export default TextField
