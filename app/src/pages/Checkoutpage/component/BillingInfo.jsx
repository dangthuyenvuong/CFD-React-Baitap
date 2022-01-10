import React from 'react'
import { Buttons, Inputs } from '../../../components'

export function BillingInfo({register , error}) {
    let inputs = [
        {label: 'First name',placehoder: 'First name',...register('firstName'),error: error.firstName},
        {label: 'Last name',placehoder: 'Last name',...register('lastName'),error: error.lastName},
        {label: 'Email address',placehoder: 'Email address',...register('email'),error: error.email},
        {label: 'Phone number',placehoder: 'Phone number',...register('phone',{mustNumber:true}),error: error.phone},
        {label: 'Address',placehoder: 'Address',...register('address'),error: error.address},
        {label: 'Town / city',placehoder: 'Town or city',...register('city'),error: error.city},
        {label: 'State / country',placehoder: 'Choose a state or Country',...register('country'),error: error.country,type:'select',opts:['haha','hehe']},
        {label: 'Postal code / Zip',placehoder: 'Postal code or Zip',...register('zip'),error: error.zip}
    ]
    return (
        <div className='billingInfo form_group'>
            <div className='form_title'>
                <h2>Billing Info</h2>
                <p><span>Please enter your billing info</span><span>Step 1 of 5</span></p>
            </div>
            <div className='form_inputs'>
                {inputs.map(item => {
                    return <div className="item"><Inputs {...item}/></div>
                })}
            </div>
        </div>
    )
}
