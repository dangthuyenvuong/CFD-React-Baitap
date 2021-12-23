import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <div>
            <div className="">header</div>
            <main id="main-content">
                <Outlet />
            </main>
            <div className="">footer</div>

        </div>
    )
}
