import React, { useState } from 'react'
import './style.scss'

export default function Accordian({ title, children }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleTitleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className={`accordian`}>
                <div className={`accor-item ${isOpen ? 'open' : 'hide'}`}>
                    <h3 className='title' onClick={handleTitleClick}>
                        {title}
                    </h3>
                    <div className="content">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
