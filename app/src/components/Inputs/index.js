import React from 'react'
import classnames from 'classnames';
import './style.scss';
export function Inputs({label,name, type='text' , placehoder , icon , url = 'imgs/arrow.svg' , size = 'middle'}) {
    return (
        <div className="inputs ">
            {label && (<label className='textStyle'>{label}</label>)}
            <div className={classnames("inputs_input","inputStyle",`icon-${icon}`,`type-${type}`,`size-${size}`)}>
                {type != 'textarea'? <input placeholder=' ' type={type} />: <textarea placeholder=' '></textarea>}
                <div className="inputs_input-placehoder">
                    {icon == 'left' && (<img src={url} />)}
                    <span>{placehoder}</span>
                    {icon == 'right' && (<img src={url} />)}
                </div>
            </div>
        </div>
    )
}
