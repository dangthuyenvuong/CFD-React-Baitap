import React from 'react'
import { ShoppingCard } from '../../../components';
export function Other() {
    return (
        <aside className='other'>
            <div className='form_title'>
                <h2>Order Summary</h2>
                <p><span>Price can change depending on shipping method and taxes of your state.</span></p>
            </div>
            <div className='form_other'>
                <ShoppingCard />
            </div>
        </aside>
    )
}
