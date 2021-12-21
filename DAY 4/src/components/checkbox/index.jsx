import React from 'react'
import './style.scss'

export default function Checkbox({onchange, value,type, name}) {
    return (
        <>
            <div className="checkbox">
            <input type={type} value={value} name={name} onChange={onchange}/>
            <p>{value}</p>
            </div>
            {/* <div className="checkbox">
            <input type='checkbox' value={value} onChange={onchange} checked={checked ? 'checked' : ''}/>
            <p>{value}</p>
            </div> */}
        </>
    )
}
