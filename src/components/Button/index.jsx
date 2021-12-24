import './style.scss'
import classnames from 'classnames'
import React from 'react'
import { IconLoading } from 'components/Icon'

const Button = ({ children, loading,  className, color = 'default', size = 'small', type = 'default', round = false, icon, ...params }) => {

    return (
        <button
            {...params}
            className={
                classnames('Button', className, `color-${color}`, `size-${size}`, `type-${type}`, { round })
            }
            disabled={loading}
        >
            {loading && <IconLoading />}
            {type === 'icon-left' && !loading && icon}
            {children}
            {type === 'icon-right' && icon}
        </button>
    )

}

export default Button