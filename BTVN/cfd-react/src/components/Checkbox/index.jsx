import React from 'react'
import './style.scss'
function CheckBox({ children}) {
    return (
        <div className="checkbox-wrapper">
            <input type="checkbox" />
            <label >{children}</label>
        </div>
    )
}

export default CheckBox
