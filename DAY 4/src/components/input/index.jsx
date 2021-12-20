import React from 'react'
import './style.scss'

export default function Input({size ='small', label='label', type='default', icon, placeholder='text', value, onchange, error, text='text'}) {
    return (
        <div className='inputForm'>
            <p>{label}</p>
            <div className={`input size-${size} type-${type}`}>
                {type === 'icon-left' && icon}
                <input placeholder={placeholder} type={text} value={value} onChange={onchange}/>
                {type === 'icon-right' && icon}
            </div>
            <p className="error-text">{error}</p>
            
        </div>
    )
}
