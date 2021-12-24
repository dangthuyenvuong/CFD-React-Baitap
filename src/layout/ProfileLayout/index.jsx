import { useAuth } from 'context/AuthContext'
import React, { useContext } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router'
import { Link, NavLink } from 'react-router-dom'
import Button from '../../components/Button'

export const ProfileLayout = () => {

    const { login, submitLogout } = useAuth()

    const navigate = useNavigate()
    // const [link, setLink] = useState('')

    const buttonClick = () => {
        navigate('/')
        // setLink('/')
    }


    // if(link) return <Navigate to={link}/>
    if (!login) return <Navigate to="/" />

    return (
        <div>
            <ul>
                <li>
                    <Link to="">Info</Link>
                </li>
                <li>
                    <NavLink to="address">Address</NavLink>
                </li>
                <li>
                    <NavLink to="order">Orders</NavLink>
                </li>
            </ul>
            <Button onClick={submitLogout}>Logout</Button>
            <Button onClick={buttonClick}>Go to Homepage</Button>
            <Outlet />
        </div>
    )
}
