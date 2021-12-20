import React from 'react'
import { ArrowDown } from '../icon'


export default function Nav() {
    return (
        <div className='header__nav'>
            <div className="container">
            <ul>
            <li>
                <p>Bakery</p>
                <ArrowDown size='12'/>

            </li>
            <li>
                <p>Fruit and vegetables</p>
                <ArrowDown size='12'/>

            </li>
            <li>
                <p>Meat and fish</p>
                <ArrowDown size='12'/>

            </li>
            <li>
                <p>Drinks</p>
                <ArrowDown size='12'/>

            </li>
            <li>
                <p>Kitchen</p>
                <ArrowDown size='12'/>

            </li>
            <li>
                <p>Special nutrition</p>
                <ArrowDown size='12'/>

            </li>
            <li>
                <p>Baby</p>
                <ArrowDown size='12'/>

            </li>
            <li>
                <p>Pharmacy</p>
                <ArrowDown size='12'/>

            </li>
            </ul>            
            </div>
        </div>
    )
}
