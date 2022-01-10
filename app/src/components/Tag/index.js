import './style.scss';

import React from 'react'

export default function Tag({children}) {
    return (
        <div className='tag'>
            <span>{children}</span>
        </div>
    )
}
