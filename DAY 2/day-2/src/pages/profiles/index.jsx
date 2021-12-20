import React from 'react'
import {
    Link, Outlet
  } from 'react-router-dom'
export default function Profile() {
    return (
        <div>
            <h2>Profile Head</h2>
            <ul>
                <li><Link to='myprofile'>My Profile</Link></li>
                <li><Link to='order'>Order</Link></li>
                <li><Link to='order_detail'>Order Detail</Link></li>
                <li><Link to='payment'>Payment</Link></li>
                <li><Link to='payment_detail'>Payment Detail</Link></li>
                <li><Link to='address'>Address</Link></li>
                <li><Link to='address_detail'>Address Detail</Link></li>
            </ul>
            <Outlet/>

        </div>
    )
}
