import React from 'react'
import {AdditionalInfomation , BillingInfo , BillingMethod ,Confirmation,PaymentMethod, Other} from './component/';
import './style.scss';
export default function Checkoutpage() {
    return (
        <div className='checkout'>
            <div className='container'>
                <form className='form'>
                    <BillingInfo />
                    <BillingMethod />
                    <PaymentMethod />
                    <AdditionalInfomation />
                    <Confirmation />
                </form>
                <Other />
            </div>
        </div>
    )
}
