import { useState } from 'react'
import './style.scss'
const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleTitleClick = (ev) => {
        setIsOpen(!isOpen)
        console.log('handleTitleClick')
    }

    console.log('render')
    return (
        <div className={`Accordion ${isOpen ? 'open' : 'hide'}`}>
            <h3 className={'title'} onClick={handleTitleClick}>{title}</h3>
            <div className={'content'}>{children}</div>
        </div>
    )
}

export default Accordion