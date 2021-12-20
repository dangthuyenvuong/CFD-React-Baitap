import React from 'react'
import './style.scss'

export default function Checkbox({onclick,checked, value}) {
    return (
            <div className="checkbox">
            <input type='checkbox' value={value} onClick={onclick} checked={checked ? 'checked' : ''}/>
            <p>{value}</p>
            </div>
        //     <div className="checkbox">
        //     <input type='checkbox' value='no' onClick={onclick} checked={checked ? 'checked' : ''}/>
        //     <p>no</p>
        //     </div>
    )
}
