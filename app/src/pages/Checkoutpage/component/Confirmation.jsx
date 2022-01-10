import React from 'react'
import { Buttons, Inputs } from '../../../components'
export function Confirmation({error , handleSubmit, register}) {
    let option = {isCheckbox: true};
    let agreement = [
        {type: 'checkbox', placehoder: 'I agree with sending an Marketing and newsletter emails. No spam, promissed!', ...register('agreement1', option)},
        {type: 'checkbox', placehoder: 'I agree with our terms and conditions and privacy policy.', ...register('agreement2',option)}
    ]
    return (
        <div className='confirmation form_group'>
            <div className='form_title'>
                <h2>Confirmation</h2>
                <p><span>We are getting to the end. Just few clicks and your order si ready!</span><span>Step 5 of 5</span></p>
            </div>
            <div className='form_confir'>
                {agreement.map(item => {
                    return  <Inputs {...item}/> 
                })}
            </div>
            <p className='form_error'>{error.agreement1 || error.agreement2}</p>
        </div>
    )
}
