import React from 'react'
import './style.scss'
import classnames from 'classnames'
export default function Inputs({label = "Text Label" , placehoder = "Text here" , icon = "none"}) {
    return (
        <div className="Inputs">
            {label != '' && (<label>{label}</label>)}
            <input type="text" placeholder=' '/>
            <div className={classnames("Inputs_placehoder" , `icon-${icon}`)}>
                {icon == 'left' && (<img src="img/7.svg" />)}
                <span>{placehoder}</span>
                {icon == 'right' && (<img src="img/7.svg" />)}
            </div>
        </div>
    )
}
