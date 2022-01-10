import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import Buttons from '../components/Buttons';
import ModalCard from '../components/ModalCard';
import { LOGOUT_ACTION, TOKEN} from '../constant'
export function ProfileLayout() {
    const dispatch = useDispatch();
    const token = localStorage.getItem(TOKEN)    
    const navigate = useNavigate()
    console.log(!token)
    if(!token){
        return <Navigate to='/' />
    }

    function logout() {
        dispatch({
            type: LOGOUT_ACTION
        })
        navigate('/')
    }
    return (
        <div>
            <ul>
                <li>
                    <Link to=''>Profile</Link>
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
            <ModalCard />
            <Outlet />
            <br />
            <Buttons handleClick={logout}>Logout</Buttons>
        </div>
    )
}
