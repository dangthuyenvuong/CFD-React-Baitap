import React from 'react'
import { Arrow } from '../icons';
import classnames from 'classnames';
import './style.scss';

export function Buttons({children, bg='default', color='default', icon='none', size='middle', border='none', radius=false}) {
    return (
        <button className={classnames(`bg-${bg}`,`color-${color}`,`size-${size}`,{radius}, `border-${border}`)}>
            {icon == 'left' && <Arrow rotate="90deg"/>}
            <span>{children}</span>
            {icon == 'right' && <Arrow rotate="-90deg"/>}
        </button>
    )
}
