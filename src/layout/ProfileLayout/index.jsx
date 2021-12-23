import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import Button from '../../components/Button'



export default function ProfileLayout({ login, submitLogout }) {

    if (!login) {
        return <Navigate to="/" />
    }

    return (
        <div className="">

            <ul className="">
                <Link to="Order">order</Link>
            </ul>
            <ul className="">
                <Link to="Order-detail">order detail</Link>
            </ul>
            <ul className="">
                <Link to="Payment">Payment</Link>
            </ul>
            <ul className="">
                <Link to="Payment-detail">payment detail</Link>
            </ul>
            <ul className="">
                <Link to="Address">Address</Link>
            </ul>
            <ul className="">
                <Link to="Address-detail">Address detail</Link>
            </ul>
            <ul className="">
                <Link to="Cart">Cart</Link>
            </ul>
            <Button onClick={submitLogout}>Logout </Button>
            <Outlet />

        </div>
    )
}
