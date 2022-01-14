import React from 'react'

import './style.scss';
export default function Tabs({children,index=0,handleIndex}) {
    return (
        <div className='tabs'>
            <ul className='tabs_name'>
                {children.map((item,i) => <li className={index == i && 'active'} onClick={() => handleIndex(i)}><span>{item.props.tabName}</span></li>)}
            </ul>
            <ul className='tabs_content'>
                {children.map((item,i) => <li className={index == i && 'active'}>{item}</li>)}
            </ul>
        </div>
    )
}