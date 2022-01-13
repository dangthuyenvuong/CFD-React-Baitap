import React from 'react'
import { Arrow } from '../icons';
import classnames from 'classnames';
import './style.scss';

export default function Buttons({children, bg='default', color='default', icon='none', size='middle', border='none', radius=false,handleSubmit, ...rest}) {
    return (
        <button 
        onClick={handleSubmit} 
        className={classnames(`bg-${bg}`,`color-${color}`,`size-${size}`,{radius}, `border-${border}`)}
        {...rest}
        >
            {icon == 'left' && <Arrow rotate="90deg"/>}
            <span>{children}</span>
            {icon == 'right' && <Arrow rotate="-90deg"/>}
        </button>
    )
}
