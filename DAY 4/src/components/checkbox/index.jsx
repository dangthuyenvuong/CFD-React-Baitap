import React from 'react'
import './style.scss'

export default function Checkbox({checked}) {
    return (
        <div className='checkForm'>
            <div className="checkbox">
            <input type='checkbox' checked={checked}/>
            <p>yes</p>
            </div>
            <div className="checkbox">
            <input type='checkbox' checked={checked}/>
            <p>no</p>
            </div>
        </div>
    )
}
