import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Layout from '../../layout'
import FullName from './FullName'

export default function Profile() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/Profile/FullName">Fullname</Link>
                </li>
                <li>
                    <Link to="/Profile/Phone">Phone</Link>
                </li>
                <li>
                    <Link to="/Profile/Address">Address</Link>
                </li>
            </ul>
        </div>
    )
}
