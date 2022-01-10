import React from 'react'
import { Buttons, InputMethod } from '../../../components'

export function BillingMethod({register,error}) {
    let method = [
        {fee:32,url:'imgs/fedex.png', ...{...register('billMethod'),value:'FedEx'}},
        {fee:15,url:'imgs/DHL.png',...{...register('billMethod'),value:'DHL'}}
    ]
    return (
        <div className='billingMethod form_group'>
            <div className='form_title'>
                <h2>Billing method</h2>
               <p> <span>Please enter your payment method</span><span>Step 2 of 5</span></p>
            </div>
            <div className='form_method'>
                {method.map(item => {
                    return <div className='item'>
                    <InputMethod {...item}/>
               </div>
                })}
            </div>
            <p className='form_error'>{error.billMethod}</p>
        </div>
    )
}
