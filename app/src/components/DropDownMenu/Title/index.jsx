import React from 'react'
import { Arrow } from '../../icons';

export default function Title({myTitle , color}) {
    return (
        <li className="menu_list-item">
            <span style={{color}}>{myTitle}</span>
            <Arrow color="#6A983C"/>
        </li>
    )
}
