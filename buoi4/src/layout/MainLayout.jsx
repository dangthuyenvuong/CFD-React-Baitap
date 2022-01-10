import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import ModalCard from '../components/ModalCard'

export function MainLayout() {
    return (
        <div>
            <Header />
            <main>
                <ModalCard />
                <Outlet />
            </main>
            Footer
        </div>
    )
}
