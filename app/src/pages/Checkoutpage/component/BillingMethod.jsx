import React from 'react'
import { InputMethod } from '../../../components'

export function BillingMethod() {
    return (
        <div className='billingMethod form_group'>
            <div className='form_title'>
                <h2>Billing method</h2>
               <p> <span>Please enter your payment method</span><span>Step 2 of 5</span></p>
            </div>
            <div className='form_method'>
               <div className='item'>
                    <InputMethod fee={32} name='FedEx' inputname='test' url='imgs/fedex.png'/>
               </div>
               <div className='item'>
                    <InputMethod fee={15} name='DHL' inputname='test' url='imgs/DHL.png'/>
               </div>
            </div>
        </div>
    )
}
