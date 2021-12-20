import React from 'react'
import Button from '../button';
import { ArrowDown } from '../icon';
import './style.scss'

export default function Banner({color}) {
    return (
        <div className='banner'>
            <div className="banner__info">
                <h6>Banner subfocus</h6>
                <h3>Space for heading</h3>
            </div>
            <Button color={color} size='medium' type='icon-right' icon={<ArrowDown size='16'/>}>Read recepies</Button>
        </div>
    )
}
