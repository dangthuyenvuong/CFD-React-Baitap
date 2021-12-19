import React from 'react';
import classNames from 'classnames';
import "./style.scss";

export default function Button({color = "simple", size = "small", type = "default", children}) {
    return (
        <button className={classNames(
            'btn', 
            `btn-${size}`, 
            `btn-${color}`, 
            `btn-${type}`
        )}>
            {children}
        </button>
    )
}
