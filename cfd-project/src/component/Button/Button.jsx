import React from 'react';
import './style.scss'
import classNames from 'classnames'
function Button({ content, color = "default" , bgcolor = "default" , size = "medium", type = "default", round = false , icon = null }) {
    return (
        <a href="#!" className={classNames("button", `color-${color}`, `bgcolor-${bgcolor} `,  `size-${size}`, `type-${type}`, { round })} >
            {type === 'icon-left' && <span>{icon}</span> }
            {content}
            {type === 'icon-right' && <span>{icon}</span>}
        </a>
    );
}

export default Button;