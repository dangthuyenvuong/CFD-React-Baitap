import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import {
    Outlet,
    Link
  } from 'react-router-dom'

export default function MainLayout() {
    return (
        <div>
            <Header/>
            <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/ContactUs'>Contact Us</Link></li>
        <li><Link to='/viewcart'>View Cart</Link></li>
        <li><Link to='/checkout'>Check Out</Link></li>
        <li><Link to='/chkscss'>Check Out Success</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/reg'>Register</Link></li>
        <li><Link to='/forgot'>Forgot Password</Link></li>
        <li><Link to='/reset'>Reset Password</Link></li>
        <li><Link to='/pf'>Profile</Link></li>
      </ul>
            <Outlet/>
            <Footer/>
        </div>
    )
}
