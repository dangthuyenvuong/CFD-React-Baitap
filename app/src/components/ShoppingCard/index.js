import React from 'react'
import {ProductCard , Inputs} from '../';
import './style.scss';
export default function ShoppingCard() {
    return (
        <div className='shoppingCard'>
            <ul className='shoppingCard_list'>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
            </ul>
            <div className='shoppingCard_bill'>
                <div className='shoppingCard_bill-details'>
                    <p><span>Subtotal</span><span>73.98 USD</span></p>
                    <p><span>Tax</span><span>17% 16.53 USD</span></p>
                    <p><span>Shipping</span><span>0 USD</span></p>
                </div>
                <div className='shoppingCard_bill-total'>
                    <div className='input'>
                        <Inputs placehoder='Apply promo code' label='Apply now'/>
                    </div>
                    <div className='number'>
                        <p><span>Total Order</span><span>Guaranteed delivery day:  June 12, 2020</span></p>
                        <div>89.84 USD</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
