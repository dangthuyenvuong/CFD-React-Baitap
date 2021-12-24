import React from 'react'

import {Inputs} from '../../../components';
export function AdditionalInfomation() {
    return (
        <div className='additionalInfomation form_group'>
            <div className='form_title'>
                <h2>Additional informations</h2>
                <p><span>Need something else? We will make it for you!</span><span>Step 4 of 5</span></p>
            </div>
            <Inputs size='large' label="Order notes" type='textarea' placehoder='Need a specific delivery day? Sending a gitf? Let’s say ...' />
        </div>
    )
}
