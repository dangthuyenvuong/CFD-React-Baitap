import React from 'react'
import { Link } from 'react-router-dom'


export default function HeaderTop() {
    return (
        <div className="header__top">
            <div className="header__top-left">
            <a href="#" className="top-left__contact">Chat with us</a>
            <p className="top-left__phone">+420 336 775 664</p>
            <p className="top-left__email">info@freshnesecom.com</p>
            </div>
            <div className="header__top-right">
            <Link to='blog' className="top-right__blog">Blog</Link>
            <Link to='blog' className="top-right__aboutus">About Us</Link>
            <Link to='blog' className="top-right__carrers">Careers</Link>
            </div>
        </div>
    )
}
