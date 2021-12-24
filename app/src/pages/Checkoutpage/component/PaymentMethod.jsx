import React from 'react'
import {Accordion, InputMethod} from '../../../components';

export function PaymentMethod() {
    return (
        <div className='paymentMethod form_group'>
            <div className='form_title'>
                <h2>Payment method</h2>
                <p><span>Please enter your payment method</span><span>Step 3 of 5</span></p>
            </div>
            <div className='form_payment'>
                <div className="item">
                    <Accordion name='Credit card' inputname='payment' url='imgs/fedex.png' />
                </div>
                <div className="item">
                    <Accordion name='Credit card' inputname='payment' url='imgs/fedex.png' />   
                </div>
                <div className="item">
                    <Accordion name='Credit card' inputname='payment' url='imgs/fedex.png' />
                </div>
            </div>
        </div>
    )
}
