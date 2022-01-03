import { useAuth } from 'context/AuthContext'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import { Link } from 'react-router-dom'

export const AuthLayout = () => {
    // const { login } = useAuth()

    const { login } = useSelector(store => store.auth)

    if (login) return <Navigate to="/profile" />
    return (
        <div>
            <ul>
                <li>
                    <Link to="login">Login</Link>
                    <Link to="register">Register</Link>
                    <Link to="forgot-password">Forgot password</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default AuthLayout