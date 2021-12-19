import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import Header from '../component/Header'

export default function Layout() {
    return (
        <>
            <Header />
            <div className='main-content'>
                <Outlet />
            </div>
            <Footer />
        </>
        
    )
}
