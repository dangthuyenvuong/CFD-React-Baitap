import './style.scss';

import React from 'react'

export function Tag({children}) {
    return (
        <div className='tag'>
            <span>{children}</span>
        </div>
    )
}
