import './style.scss';

import React from 'react';
import { Inputs, InputMethod } from '..';
import classnames from 'classnames';

export default function Accordion({open,handleShow, register,error, ...rest}) {
    let inputs = [
        {label: 'Card number', placehoder: 'Card number', ...register('cardNumber'), error: error.cardNumber},
        {label: 'Card holder', placehoder: 'Card holder', ...register('cardHolder'),error: error.cardHolder},
        {label: 'Expiration date', placehoder: 'DD/MM/YY', ...register('cardDate'),error: error.cardDate},
        {label: 'CVC', placehoder: 'CVC', ...register('CVC'), error: error.CVC}
    ]
    return (
        <div className={classnames('accordion', {open})}>
            <div className="accordion_tab" onClick={handleShow}>
                <InputMethod {...rest}/>
            </div>
            {open && <div className="accordion_panel">
                {inputs.map(item => 
                    <Inputs {...item} />
                )}
                
            </div>}
        </div>
    )
}
