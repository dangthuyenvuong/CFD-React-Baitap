import React from 'react'
import classnames from 'classnames'
import './style.scss'

export default function Button({ children, color = 'default', size = 'small', type = 'default' }) {

    return (
        <button className={classnames('button', `color-${color}`, `size-${size}`, `type-${type}`)} >
            {children}
        </button>
    )
}
