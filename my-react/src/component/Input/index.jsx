import React from 'react'

const TextField = ({label, value}) => {
    return (
        <div>
            <div className="textField">
                <label htmlFor="">{label}</label>
                <input type="text" />
                <p className="warningText"></p>
            </div>
        </div>
    )
}

export default TextField
