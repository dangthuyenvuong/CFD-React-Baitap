import React from 'react'
import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom'

export default function ProfileLayout({login , logout}) {
    // let navi = useNavigate();
    // navi('/')
    if(!login){
        return <Navigate to='/' />
    }
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="">Info</NavLink>
                </li>
                <li>
                    <NavLink to="address">Address</NavLink>
                </li>
                <li>
                    <NavLink to="order">Order</NavLink>
                </li>
            </ul>
            <button onClick={logout}>Log out</button>
            <Outlet />
        </div>
    )
}
