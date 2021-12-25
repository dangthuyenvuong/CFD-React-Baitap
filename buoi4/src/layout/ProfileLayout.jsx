import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
export function ProfileLayout({login , handleLogout}) {
    if(!login) return <Navigate to='/' />

    return (
        <div>
            <ul>
                <li>
                    <Link to=''>My Profile</Link>
                </li>
                <li>
                    <Link to='order' >Order</Link>
                </li>

                <li>
                    <Link to='payment' >Payment</Link>
                </li>
                <li>
                    <Link to='address' >Address</Link>
                </li>
            </ul>
            <Outlet />
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
