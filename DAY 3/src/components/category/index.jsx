import React from 'react'
import Button from '../button'
import { ArrowDown } from '../icon'
import './style.scss'

export default function Category({header, button}) {
    const caterogyItem = [
        {
            name: 'Category Item'
        }
    ]
    return (
        <div className='category'>
            <h4 className='category__header'>{header}</h4>
            <ul>
                <li>
                    <a href="">{caterogyItem.map(item => item.name)}</a>
                </li>
                <li>
                    <a href="">{caterogyItem.map(item => item.name)}</a>
                </li>
                <li>
                    <a href="">{caterogyItem.map(item => item.name)}</a>
                </li>
                <li>
                    <a href="">{caterogyItem.map(item => item.name)}</a>
                </li>
                <li>
                    <a href="">{caterogyItem.map(item => item.name)}</a>
                </li>
            </ul>
            <Button color='bright' size='medium' type='icon-right' icon={<ArrowDown size='12'/>}>
                {button}
            </Button>
        </div>
    )
}
