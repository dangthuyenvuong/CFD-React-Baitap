import './style.scss'
import classnames from 'classnames'
import React from 'react'

const Button = ({ children, className, color = 'default', size = 'small', type = 'default', round = false, icon, ...params }) => {

    return (
        <button
            {...params}
            className={
                classnames('Button', className, `color-${color}`, `size-${size}`, `type-${type}`, { round })
            }

        >
            {type === 'icon-left' && icon}
            {children}
            {type === 'icon-right' && icon}
        </button>
    )

}

export default Button