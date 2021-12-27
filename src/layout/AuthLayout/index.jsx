import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { Link } from 'react-router-dom'

export const AuthLayout = ({ login, submitLogin }) => {
    if (login) { return <Navigate to="/profile" /> }
    return (
        <div>
            <ul className="">
                <li className="">
                    <Link to="/Resgister">Register</Link>
                </li>
                <li className="">
                    <Link to="/Forgot-password">Forgot password</Link>
                </li>
                <li className="">
                    <Link to="/Login">Login</Link>
                </li>

                <Outlet />
            </ul>

        </div>
    )
}

export default AuthLayout