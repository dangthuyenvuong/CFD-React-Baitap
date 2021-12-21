import React from 'react'
import './style.scss'

export default function Button({children, color='default', size='small', type='default', round=false, icon, onclick, loading}) {
    return (
        <div className={`button color-${color} size-${size} type-${type} ${round ? 'round' : ''} ${loading ? 'loading' : ''}`} onClick={onclick}>
            {type === 'icon-left' && icon}
            {!loading ? '' : <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
            {children} 
            {type === 'icon-right' && icon}
        </div>
    )
}
