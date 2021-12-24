import React from 'react'
import { Buttons, Inputs } from '../../../components'
export function Confirmation() {
    return (
        <div className='confirmation form_group'>
            <div className='form_title'>
                <h2>Confirmation</h2>
                <p><span>We are getting to the end. Just few clicks and your order si ready!</span><span>Step 5 of 5</span></p>
            </div>
            <div className='form_confir'>
                <Inputs type='checkbox' placehoder="I agree with sending an Marketing and newsletter emails. No spam, promissed!"/>
                <Inputs type='checkbox' placehoder="I agree with our terms and conditions and privacy policy."/>
            </div>
            <div className='form_submit'>
                <div className="form_submit-btn">
                    <Buttons bg='main' size='large' color='bright' radius border='bold'>
                        Complete order
                    </Buttons>
                </div>
                <div className="form_submit-info">
                    <div className="img"><img src="imgs/layer.png" alt="" /></div>
                    <span className='textStyle'>All your data are safe</span>
                    <span className='textStyle content'>We are using the most advanced security to provide you the best experience ever.</span>
                </div>
        </div>
        </div>
    )
}
