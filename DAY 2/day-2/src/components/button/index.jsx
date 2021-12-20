import React from 'react'
import './style.scss'

export default function Button({children, color='default', size='small', type='default', round=false, icon}) {
    return (
        <div className={`button color-${color} size-${size} type-${type} ${round ? 'round' : ''}`}>
            {type === 'icon-left' && icon}
            {children}
            {type === 'icon-right' && icon}
        </div>
    )
}
