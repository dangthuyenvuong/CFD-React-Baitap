import React from 'react'
import { NavLink, Outlet,Link, Navigate } from 'react-router-dom'

export default function AuthLayout({login}) {
    if (login) return <Navigate to="/profile" />
    return (
        <div>
            <ul>
                <li>
                    <Link to="">Login</Link>
                </li>
                <li>
                    <Link to="register">register</Link>
                </li>
                <li>
                    <Link to="forgot">forgot</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}
