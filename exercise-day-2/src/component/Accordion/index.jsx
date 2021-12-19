import React, { useState } from 'react'
import { ArrowDown } from '../Icon'
import './style.scss'

export default function Accordion({title, children}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleTitleClick = () => {
		setIsOpen(!isOpen);
	};

    return (
        <div className='accordion'>
            <div className={`accordion-item ${isOpen ? "open" : "hide"}`}>
                <h2 className="accordion-header" onClick={handleTitleClick}>
                    {title}
                    <ArrowDown />
                </h2>

                <div className="accordion-body">
                    {children}
                </div>
            </div>
        </div>
    )
}