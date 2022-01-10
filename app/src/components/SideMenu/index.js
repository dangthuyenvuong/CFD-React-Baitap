import React from 'react'
import { Buttons } from '..';
import './style.scss';

export default function SideMenu({title = "Hello" , contentBtn ='More Categories' , list=[] , btn=true}) {
    return (
        <div className="sideMenu">
            <h2 className='sideMenu_title'>{title}</h2>
            <ul className='sideMenu_list'>
                {list.map(item => <li>
                    <span className='textLink'><a href={item.link}>{item.content}</a></span>
                    </li>)}
            </ul>
            {btn && <Buttons bg="bold" icon="right" radius>{contentBtn}</Buttons>}
        </div>
    )
}
