import React from 'react'
import './style.scss';

export default function MiniCard({children , infoBox = false , ...rest}) {
    return (
        <div className='miniCard' {...rest}>
            {children}
            {infoBox && <div className="miniCard_circle"><span>4</span></div>}
        </div>
    )
}
