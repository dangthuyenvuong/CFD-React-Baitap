import React from 'react'
import './style.scss';
import {useState} from 'react'

export default function Accordion({url = "img/1.svg", title="title", color = "#aaa", text = "" , children}) {
    let [isOpen , setOpen] = useState(false);

    function handle() {
        setOpen(!isOpen);
    }

    return (
        <div className={isOpen?'Accordion open':'Accordion hide'} onClick = {handle}>
            <div className='Accordion_tab'>
                <div className="svg">
                    <img src={url} />
                </div>
                <div className="content">
                    <p>{title}</p>
                    <span style={{color}}>{text}</span>
                </div>
                <div className="arrow">
                    <img style={{transform : `rotate(${isOpen?'90deg':'0deg' })`}} src="img/arrow.svg" />
                </div>
            </div>
            <div className='Accordion_content'>
                <p>{children}</p>
            </div>
        </div>
    )
}
