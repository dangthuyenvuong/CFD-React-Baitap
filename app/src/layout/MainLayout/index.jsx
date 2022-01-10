import React from 'react'
import { DropDownMenu, Footer, Header } from '../../components';
import {Outlet} from "react-router-dom";
import NavSide from '../../components/NavSide';

export default function MainLayout() {
    return (
        <>
            <Header />
            <NavSide />
            <DropDownMenu />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
