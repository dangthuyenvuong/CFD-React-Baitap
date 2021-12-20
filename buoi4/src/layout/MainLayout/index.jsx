import React from 'react'
import { Outlet } from 'react-router-dom'
export default function index() {
    return (
        <div>
            <div>Header</div>
            <main>
                <Outlet />
            </main>
            <div>Footer</div>
        </div>
    )
}
