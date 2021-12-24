import React from 'react'
import './style.scss';

export function MiniCard({children , infoBox = false}) {
    return (
        <div className='miniCard'>
            {children}
            {infoBox && <div className="miniCard_circle"><span>4</span></div>}
        </div>
    )
}
