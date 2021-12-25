import React from 'react'
import classnames from 'classnames'
import './style.scss'

export default function Button({ children, color = 'default', size = 'small', type = 'default', onCLick }) {

    return (
        <button className={classnames('button', `color-${color}`, `size-${size}`, `type-${type}`)} onClick={onCLick}> 
            {children}
        </button>
    )
}
