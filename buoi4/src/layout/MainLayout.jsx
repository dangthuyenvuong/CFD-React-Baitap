import React from 'react'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
    return (
        <div>
            Header
            <main>
                <Outlet />
            </main>
            Footer
        </div>
    )
}
