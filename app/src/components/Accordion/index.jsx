import './style.scss';

import React, { useState } from 'react';
import { Inputs, InputMethod } from '..';
import classnames from 'classnames';

export function Accordion({name,inputname , url}) {
    let [show , setShow] = useState(false);
    function handleShow(e) {
        setShow(!show);
        e.currentTarget.parentNode.querySelector('input[type=radio]').checked = !show;
        }
    return (
        <div className={classnames('accordion',{show})}>
            <div className="accordion_tab" onClick={handleShow}>
                <InputMethod name={name} inputname={inputname} url={url}/>
            </div>
            <div className="accordion_panel">
                <div className="item1">
                <Inputs label="Card number" placehoder="Card number" />
                </div>
                <Inputs label="Card holder" placehoder="Card holder"/>
                <Inputs label="Expiration date" placehoder="DD/MM/YY"/>
                <Inputs label="CVC" placehoder="CVC"/>
            </div>
        </div>
    )
}
