import React, { useState } from 'react'
import {Accordion} from '../../../components';

export function PaymentMethod({error, register}) {
    let [show , setShow] = useState();
    let accor = [
        {url:'imgs/fedex.png',handleShow:() => handleShow(0), ...{...register('payMethod'),value:'Credit card'}},
        {url:'imgs/fedex.png',handleShow:() => handleShow(1), ...{...register('payMethod'),value:'PayPal'}},
        {url:'imgs/fedex.png',handleShow:() => handleShow(2), ...{...register('payMethod'),value:'Bitcoin'}}
    ]
    function handleShow(index) {
        setShow(index)
    }
    return (
        <div className='paymentMethod form_group'>
            <div className='form_title'>
                <h2>Payment method</h2>
                <p><span>Please enter your payment method</span><span>Step 3 of 5</span></p>
            </div>
            <div className='form_payment'>
                {accor.map((item,index) => {
                    return <div className="item">
                    <Accordion {...item}
                    open={index === show}
                    register={register}
                    error={error}/>
                </div>
                })}
            </div>
            <p className='form_error'>{error.payMethod}</p>
        </div>
    )
}
