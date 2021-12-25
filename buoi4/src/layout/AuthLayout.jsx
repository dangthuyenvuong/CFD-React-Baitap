import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'

export function AuthLayout({login}) {
    if(login) return <Navigate to='/profile' />
    return (
        <div>
            <ul>
                <li>
                    <Link to=''>Login</Link>
                </li>
                <li>
                    <Link to='forgot' >Forgot</Link>
                </li>
                <li>
                    <Link to='reset' >Reset</Link>
                </li>
                <li>
                    <Link to='register' >Register</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}
