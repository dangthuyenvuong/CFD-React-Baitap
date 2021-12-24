import React from 'react'
import { DropDownMenu, Footer, Header } from '../../components';
import {Outlet} from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <Header />
            <DropDownMenu />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
