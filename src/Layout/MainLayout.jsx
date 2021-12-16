import React from 'react';
import {Outlet, Link}from "react-router-dom";

function MainLayout(props) {
    return (
        <div>
            App
            <Outlet />
        </div>
    );
}

export default MainLayout;