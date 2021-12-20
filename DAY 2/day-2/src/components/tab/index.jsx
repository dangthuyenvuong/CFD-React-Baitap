import React, { useState } from 'react'
import './style.scss'

export default function Tab() {
    const [isActive, setIsActive] = useState(1)
    const tab1 = () => {
        setIsActive(1)
    }
    const tab2 = () => {
            setIsActive(2)
    }
    return (
        <div className='wrap'>
        <div className={`tab ${isActive === 1 ? 'active' : ''}`} onClick={tab1}>
            <div className="tab__name">Tab Name</div>
                <ul className="tab__item">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
        </div>
        <div className={`tab ${isActive === 2 ? 'active' : ''}`} onClick={tab2}>
            <div className="tab__name">Tab Name</div>
                <ul className="tab__item">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
        </div>
    )
}
