import React from 'react'
import { Inputs } from '../../../components'

export function BillingInfo() {
    return (
        <div className='billingInfo form_group'>
            <div className='form_title'>
                <h2>Billing Info</h2>
                <p><span>Please enter your billing info</span><span>Step 1 of 5</span></p>
            </div>
            <div className='form_inputs'>
                <div className="item">
                    <Inputs label='First name' placehoder="First name"/>
                </div>
                <div className="item">
                    <Inputs icon='left' label='Last name' placehoder="Last name"/>
                </div>
                <div className="item">
                    <Inputs label='Email addess' placehoder="Email addess"/>
                </div>
                <div className="item">
                    <Inputs label='Phone number' placehoder="Phone number"/>
                </div>
                <div className="item">
                    <Inputs label='Address' placehoder="Address"/>
                </div>
                <div className="item">
                    <Inputs label='Town / city' placehoder="Town or city"/>
                </div>
                <div className="item">
                    <Inputs label='State / country' placehoder="Choose a state or Country"/>
                </div>
                <div className="item">
                    <Inputs label='ZIP/Postal code' placehoder="Postal code or ZIP"/>
                </div>
                <div className="item">
                    <Inputs type='checkbox' placehoder="Ship to a different address?"/>
                </div>
            </div>
        </div>
    )
}
