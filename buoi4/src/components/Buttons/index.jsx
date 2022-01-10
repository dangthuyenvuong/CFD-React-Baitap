import React from 'react'
import './style.scss'
import classname from 'classnames'


export default function Buttons({children , handleClick, bg = 'default'}) {
    return (
        <div className={classname('buttons',`bg-${bg}`)} onClick={handleClick}>
            {children}
        </div>
    )
}
