import React from 'react'
import './style.scss'

export default function Input({size ='small', label='label', type='default', icon, placeholder='text'}) {
    return (
        <div>
            <p>{label}</p>
            <div className={`input size-${size} type-${type}`}>
                {type === 'icon-left' && icon}
                <input placeholder={placeholder} type="text" />
                {type === 'icon-right' && icon}
                </div>
            
        </div>
    )
}
