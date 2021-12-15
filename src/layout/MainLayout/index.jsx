import React from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    return (
        <div>
            <div>Header</div>
            <main id="main-content">
                <Outlet />
            </main>
            <div>Footer</div>
        </div>
    )
}
